---
title: Service identities and credentials
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Credential SDK integration

## mTLS credentials

To mount mTLS credentials please follow the [tutorial](/documentation/quick-tutorials/mtls).

## HTTP
### Client

<Tabs>
<TabItem value="js" label="JS" default>

```js
{@include: ../../../static/code-examples/code/mtls/http/client.js}
```
</TabItem>
<TabItem value="go" label="GO">

```go
{@include: ../../../static/code-examples/code/mtls/http/client.go}
```
</TabItem>
<TabItem value="python" label="Python">

```python
{@include: ../../../static/code-examples/code/mtls/http/client.py}
```
</TabItem>
<TabItem value="curl" label="cURL">

```shell
{@include: ../../../static/code-examples/code/mtls/http/client.sh}
```
</TabItem>
</Tabs>

### Server

<Tabs>
<TabItem value="js" label="JS" default>

```js
{@include: ../../../static/code-examples/code/mtls/http/server.js}
```
</TabItem>
<TabItem value="go" label="GO">

```go
{@include: ../../../static/code-examples/code/mtls/http/server.go}
```
</TabItem>
<TabItem value="python" label="Python">

:::note
This config only supports server TLS and not mTLS.
:::

```python
{@include: ../../../static/code-examples/code/mtls/http/server.py}
```
</TabItem>
</Tabs>

## Kafka
<Tabs>
<TabItem value="js" label="JS" default>

```python
{@include: ../../../static/code-examples/code/mtls/kafka/client.js}
```
</TabItem>
<TabItem value="go" label="GO">

```python
{@include: ../../../static/code-examples/code/mtls/kafka/client.go}
```
</TabItem>
<TabItem value="python" label="Python">

```python
{@include: ../../../static/code-examples/code/mtls/kafka/client.py}
```
</TabItem>
<TabItem value="bash" label="Bash" default>
You can use Kafka's builtin kafka-console-consumer.sh script to connect to Kafka. The script requires the credentials
to be generated in the JKS format.
<Tabs>
<TabItem value="bash" label="Bash" default>

```bash
{@include: ../../../static/code-examples/code/mtls/kafka/client.sh}
```
</TabItem>
<TabItem value="client.properties" label="client.properties">

```properties
{@include: ../../../static/code-examples/code/mtls/kafka/client.properties}
```
</TabItem>
</Tabs>
</TabItem>
</Tabs>