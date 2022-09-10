---
sidebar_position: 4
title: IBAC for Kafka
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Recap: controlling access to Kafka (incl. mTLS or tokens, users and ACLs, different ports)

## Configuring Kafka for secure access

To configure kafka for secure access we have multiple areas we need to modify in its configuration to prepare for secure
access and another where we add annotations to let Otterize know it needs to generate credentials for secure access.

The following example shows how to configure bitnami's popular
kafka [chart](https://github.com/bitnami/charts/tree/master/bitnami/kafka):

:::note
Though SSL was replaced by TLS, Kafka still uses the term SSL internally.
:::

1. Allow Otterize to manage Kafka by adding it as a super user wtih:
   ```yaml
   superUsers: "User:CN=kafka.kafka,O=SPIRE,C=US;User:CN=intents-operator.otterize,O=SPIRE,C=US"
   ```
3. Configure its [listeners](https://www.confluent.io/blog/kafka-listeners-explained/) to use SSL
   ```yaml
   listeners:
     - "CLIENT://:9092"
     - "INTERNAL://:9093"
   advertisedListeners:
     - "CLIENT://:9092"
     - "INTERNAL://:9093"
   listenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"
   ```

4. Set the authentication parameters to
    - Use mTLS
    - Having the credentials stored in a Java KeyStore (JKS) format stored in a K8s secret called `kafka-tls-secret`
      with a password set to `password`.
    - Deny anonymous access
   ```yaml
   auth: 
     clientProtocol: mtls
     interBrokerProtocol: mtls
     tls:
       type: jks
       existingSecrets:
         - kafka-tls-secret
       password: password
   authorizerClassName: kafka.security.authorizer.AclAuthorizer
   allowEveryoneIfNoAclFound: true  
   ```
5. Add pod annotations to let Otterize know it needs to generate the JKS credentials and store them at the specified K8s
   secret according to bitnami's
   chart [specifications](https://github.com/bitnami/charts/tree/master/bitnami/kafka#enable-security-for-kafka-and-zookeeper) :
   ```yaml
   podAnnotations:
     otterize/cert-type: jks
     otterize/tls-secret-name: kafka-tls-secret
     otterize/truststore-file-name: kafka.truststore.jks
     otterize/keystore-file-name: kafka-keystore.jks
     otterize/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"
     otterize/cert-ttl: "31536000" # 1 year
   ```

<details>
<summary>Expand to see the complete YAML of this example...</summary>

```yaml
superUsers: "User:CN=kafka.kafka,O=SPIRE,C=US;User:CN=intents-operator.otterize,O=SPIRE,C=US"
listeners:
  - "CLIENT://:9092"
  - "INTERNAL://:9093"
advertisedListeners:
  - "CLIENT://:9092"
  - "INTERNAL://:9093"
listenerSecurityProtocolMap: "INTERNAL:SSL,CLIENT:SSL"
auth:
  clientProtocol: mtls
  interBrokerProtocol: mtls
  tls:
    type: jks
    existingSecrets:
      - kafka-tls-secret
    password: password
authorizerClassName: kafka.security.authorizer.AclAuthorizer
allowEveryoneIfNoAclFound: true
podAnnotations:
  otterize/cert-type: jks
  otterize/tls-secret-name: kafka-tls-secret
  otterize/truststore-file-name: kafka.truststore.jks
  otterize/keystore-file-name: kafka-keystore.jks
  otterize/dns-names: "kafka-0.kafka-headless.kafka.svc.cluster.local,kafka.kafka.svc.cluster.local"
  otterize/cert-ttl: "31536000" # 1 year
```

</details>

### Testing secure connection to Kafka

You can set up an interactive session that securely connects to Kafka by deploying a pod configured to get credentials
and using the popular [kafka-console-producer](https://kafka.apache.org/quickstart#quickstart_send) and
[kafka-console-consumer](https://kafka.apache.org/quickstart#quickstart_consume) scripts:

<details>
<summary>Expand to see the details of this example...</summary>
<Tabs>
<TabItem value="namespace.yaml" label="namespace.yaml" default>

   ```yaml
   {@include: ../../../static/code-examples/kafka-mtls/interactive/namespace.yaml}
   ```

</TabItem>
<TabItem value="interactive.yaml" label="interactive.yaml" default>

   ```yaml
   {@include: ../../../static/code-examples/kafka-mtls/interactive/interactive-deployment.yaml}
   ```
</TabItem>
<TabItem value="interactive-configmap.yaml" label="interactive-configmap.yaml" default>

   ```yaml
   {@include: ../../../static/code-examples/kafka-mtls/interactive/interactive-configmap.yaml}
   ```

</TabItem>
</Tabs>
</details>

1. Deploy a pod configured for the interactive session connecting to Kafka
    ```bash
    kubectl apply -f https://docs.otterize.com/code-examples/kafka-mtls/shell/all.yaml
    ```
2. Check that the `pod` was deployed
   ```bash
   kubectl get pods -n otterize-tutorial-kafka-mtls -l app=interactive
   ```
   You should see
   ```
   NAME                           READY   STATUS    RESTARTS   AGE
   interactive-5568ff58ff-84ksc   1/1     Running   0          8s
   ```

3. Let's open two interactive terminal windows - one for the producer and one for the consumer with so we can see
   the messages sent and received in real time:

   ```bash title="Producer terminal"
   kubectl exec -n otterize-tutorial-kafka-mtls -it deploy/interactive -- bash \
   /opt/bitnami/kafka/bin/kafka-console-producer.sh \
   --bootstrap-server kafka.kafka:9092 \
   -topic mytopic \
   --producer.config /app/client.properties
   ```

   ```bash title="Consumer terminal"
   kubectl exec -n otterize-tutorial-kafka-mtls -it deploy/interactive -- bash \
   /opt/bitnami/kafka/bin/kafka-console-consumer.sh \
   --bootstrap-server kafka.kafka:9092 \
   -topic mytopic \
   --consumer.config /app/client.properties
   ```
4. Write any text you wish on the **producer terminal**, send it with an **enter** and you will see the messages appear
   on the
   ```bash title="Producer terminal"
   >Hello there consumer, this is the producer!
   >
   ```
   ```bash title="Consumer terminal"
   Hello there consumer, this is the producer!
   ```

## Setting security scope via…

## Otterize identities and Kafka ACLs

## …

## Practical notes


## Avoiding drift

## Granularities of access *(incl. via network policies, via authN-only, & topic-level)*