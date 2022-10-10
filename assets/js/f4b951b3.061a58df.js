"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),c=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,n;const{lazy:o,block:u,defaultValue:m,values:f,groupId:h,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:C}=(0,s.U)(),[N,S]=(0,a.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=h){const e=T[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&S(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),r=v[n].value;r!==N&&(P(t),S(r),null!=h&&C(h,String(r)))},z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=w.indexOf(e.currentTarget)+1;n=null!=(r=w[t])?r:w[0];break}case"ArrowLeft":{var a;const t=w.indexOf(e.currentTarget)-1;n=null!=(a=w[t])?a:w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},k)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:z,onFocus:x,onClick:x},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},4844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={sidebar_position:9,title:"Kubernetes mTLS with Otterize"},s=void 0,c={unversionedId:"k8s-mtls/README",id:"k8s-mtls/README",title:"Kubernetes mTLS with Otterize",description:"Otterize can automatically provision mTLS credentials by baking exiting K8s workload identities into certificates.",source:"@site/docs/k8s-mtls/README.mdx",sourceDirName:"k8s-mtls",slug:"/k8s-mtls/",permalink:"/k8s-mtls/",draft:!1,editUrl:"https://github.com/otterize/docs/edit/main/docs/k8s-mtls/README.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Kubernetes mTLS with Otterize"},sidebar:"docSidebar",previous:{title:"Otterize OSS",permalink:"/otterize-oss/"},next:{title:"Service identities",permalink:"/service-identities/"}},d={},p=[{value:"Mounting mTLS credentials into pods",id:"mounting-mtls-credentials-into-pods",level:2},{value:"Annotation parameters",id:"annotation-parameters",level:3},{value:"Using mTLS credentials",id:"using-mtls-credentials",level:2},{value:"HTTP",id:"http",level:3},{value:"Client",id:"client",level:4},{value:"Server",id:"server",level:4},{value:"Kafka",id:"kafka",level:3},{value:"Verify generated credentials",id:"verify-generated-credentials",level:2},{value:"What happened behind the scenes",id:"what-happened-behind-the-scenes",level:4},{value:"What&#39;s next",id:"whats-next",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Otterize can automatically provision mTLS credentials by baking exiting K8s workload identities into certificates."),(0,a.kt)("h2",{id:"mounting-mtls-credentials-into-pods"},"Mounting mTLS credentials into pods"),(0,a.kt)("p",null,"To generate credentials for the pod we simply need to update the deployment by annotating it.\nThe required steps are to"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Annotate the pod - Otterize automatically identifies the ",(0,a.kt)("inlineCode",{parentName:"li"},"otterize/tls-secret-name")," annotation, generates\nmTLS credentials, and stores them as K8s secret named as the annotation value."),(0,a.kt)("li",{parentName:"ol"},"Mount the credentials stored as a K8s secret as a volume"),(0,a.kt)("li",{parentName:"ol"},"Mount the volume into the container")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see a detailed explanation for the annotations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  template:\n    metadata:\n      ...\n      annotations:\n        # 1 Generate credentials\n        # highlight-next-line\n        otterize/tls-secret-name: client-credentials-secret\n    spec:\n      volumes:\n        # highlight-start\n        - name: otterize-credentials\n          secret:\n            # 2 Mount credentials as a volume\n            secretName: client-credentials-secret\n            # highlight-end\n      containers:\n        - name: client\n        ...\n        volumeMounts:\n          # highlight-start\n          - name: otterize-credentials\n            # 3 Mount volume into container\n            mountPath: /var/otterize/credentials\n            readOnly: true\n            # highlight-end\n"))),(0,a.kt)("h3",{id:"annotation-parameters"},"Annotation parameters"),(0,a.kt)("p",null,"For the complete list of annotation parameters please follow the SPIRE integration operator\n",(0,a.kt)("a",{parentName:"p",href:"/components/spire-integration-operator/"},"documentation"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/tls-secret-name"),"  - The name of the k8s secret in which the certificate data is stored"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/dns-names")," - A comma-separated list of additional dns names to be registered as part of the"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spire-integration.otterize.com/cert-ttl")," - The certificate TTL. Defaults to SPIRE-server's configured default TTL")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Otterize defaults to generating credentials with an expiry time of 1 day. The certificates are\nautomatically refreshed before expiring, and you must take care to always read the credentials from file, rather than caching them for this reason."),(0,a.kt)("p",{parentName:"admonition"},"To set a longer expiration time, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"spire-integration.otterize.com/cert-ttl")," annotation for your pods. For more information, see the documentation for the ",(0,a.kt)("a",{parentName:"p",href:"/components/spire-integration-operator"},"SPIRE Integration Operator"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Certificates are automatically refreshed before expiring. We recommend loading certificates each time before using them where possible.")),(0,a.kt)("h2",{id:"using-mtls-credentials"},"Using mTLS credentials"),(0,a.kt)("h3",{id:"http"},"HTTP"),(0,a.kt)("h4",{id:"client"},"Client"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst https = require('https');\n\nconst options = {\n    hostname: 'server.otterize-tutorial-mtls/hello',\n    port: 443,\n    path: '/hello',\n    method: 'GET',\n    cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),\n    key: fs.readFileSync('/var/otterize/credentials/svid.key'),\n    ca: fs.readFileSync('/var/otterize/credentials/bundle.pem')\n}\n\nconst req = https.request(\n    options,\n    res => {\n        res.on('data', function (data) {\n            console.log(data)\n        });\n    }\n);\n\nreq.end();\n"))),(0,a.kt)(o.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "io/ioutil"\n    "log"\n    "net/http"\n)\n\nfunc main() {\n    // Read the key pair to create certificate\n    cert, err := tls.LoadX509KeyPair("/var/otterize/credentials/svid.pem", "/var/otterize/credentials/key.pem")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Create a CA certificate pool and add bundle.pem to it\n    caCert, err := ioutil.ReadFile("/var/otterize/credentials/bundle.pem")\n    if err != nil {\n        log.Fatal(err)\n    }\n    caCertPool := x509.NewCertPool()\n    caCertPool.AppendCertsFromPEM(caCert)\n\n    // Create an HTTPS client and supply the created CA pool and certificate\n    client := &http.Client{\n        Transport: &http.Transport{\n            TLSClientConfig: &tls.Config{\n                RootCAs:      caCertPool,\n                Certificates: []tls.Certificate{cert},\n            },\n        },\n    }\n\n    r, err := client.Get("https://server.otterize-tutorial-mtls/hello")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Read the response body\n    defer r.Body.Close()\n    body, err := ioutil.ReadAll(r.Body)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Print the response body to stdout\n    fmt.Printf("%s\\n", body)\n}\n\n'))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nresp = requests.get(\"https://server.otterize-tutorial-mtls/hello\",\n                    cert=('/var/otterize/credentials/svid.pem', '/var/otterize/credentials/key.pem'),\n                    verify=\"/var/otterize/credentials/bundle.pem\")\n"))),(0,a.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl  --cert /var/otterize/credentials/svid.pem \\\n      --key /var/otterize/credentials/key.pem \\\n      --cacert /var/otterize/credentials/bundle.pem https://server.otterize-tutorial-mtls/hello\n")))),(0,a.kt)("h4",{id:"server"},"Server"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const https = require(`https`);\nconst fs = require(`fs`);\n\nconst options = {\n    key: fs.readFileSync('/var/otterize/credentials/key.pem'),\n    cert: fs.readFileSync('/var/otterize/credentials/svid.pem'),\n    ca: fs.readFileSync('/var/otterize/credentials/bundle.pem'),\n    requestCert: true\n};\n\nhttps.createServer(\n    options,\n    (req, res) => {\n        const peerCert = req.connection.getPeerCertificate();\n        const ownCert = req.connection.getCertificate();\n        console.log(\"Received request:\");\n        console.log(peerCert.subject.CN + \":\\t\" + req.method + \" \" + req.url);\n        if (req.url === '/hello') {\n            res.writeHead(200);\n            res.end('mTLS hello world\\nfrom: ' + ownCert.subject.CN + '\\nto client: ' + peerCert.subject.CN);\n        } else {\n            res.end();\n        }\n    }).listen(443);\n"))),(0,a.kt)(o.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "io"\n    "io/ioutil"\n    "log"\n    "net/http"\n)\n\nfunc helloHandler(w http.ResponseWriter, r *http.Request) {\n    // Write "Hello, world!" to the response body\n    io.WriteString(w, "Hello, world over mTLS!\\\\n")\n    fmt.Println("GET /hello mTLS")\n}\n\nfunc main() {\n    // Set up a /hello resource handler\n    http.HandleFunc("/hello", helloHandler)\n\n    // Create a CA certificate pool and add bundle.pem to it\n    caCert, err := ioutil.ReadFile("/var/otterize/credentials/bundle.pem")\n    if err != nil {\n        log.Fatal(err)\n    }\n    caCertPool := x509.NewCertPool()\n    caCertPool.AppendCertsFromPEM(caCert)\n\n    // Create the TLS Config with the CA pool and enable Client certificate validation\n    tlsConfig := &tls.Config{\n        ClientCAs:  caCertPool,\n        ClientAuth: tls.RequireAndVerifyClientCert,\n    }\n    tlsConfig.BuildNameToCertificate()\n\n    // Create a Server instance to listen on port 8443 with the TLS config\n    server := &http.Server{\n        Addr:      ":443",\n        TLSConfig: tlsConfig,\n    }\n\n    // Listen to HTTPS connections with the server certificate and wait\n    log.Fatal(server.ListenAndServeTLS("/var/otterize/credentials/svid.pem", "/var/otterize/credentials/key.pem"))\n}\n\n'))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from flask import Flask\nimport ssl\n\napp = Flask(__name__)\n\n\n@app.route(\"/hello\")\ndef hello():\n    return \"Hello World!\"\n\n\nif __name__ == \"__main__\":\n    context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)\n    context.verify_mode = ssl.CERT_REQUIRED\n    context.load_verify_locations('/var/otterize/credentials/bundle.pem')\n    context.load_cert_chain('/var/otterize/credentials/svid.pem', '/var/otterize/credentials/key.pem')\n    app.run(port=443, ssl_context=context)\n\n")))),(0,a.kt)("h3",{id:"kafka"},"Kafka"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"const fs = require('fs')\nconst {Kafka} = require('kafkajs')\n\nconst kafka = new Kafka({\n    brokers: ['kafka.kafka:9092'],\n    ssl: {\n        ca: [fs.readFileSync('/var/otterize/credentials/bundle.pem', 'utf-8')],\n        key: fs.readFileSync('/var/otterize/credentials/key.pem', 'utf-8'),\n        cert: fs.readFileSync('/var/otterize/credentials/svid.pem', 'utf-8')\n    },\n})\n\nconst consumer = kafka.consumer({groupId: 'test-group'})\n\nconsumer.connect().then(\n    consumer.subscribe({topic: 'mytopic', fromBeginning: true}).then(\n        consumer.run({\n            eachMessage: async ({\n                                    topic,\n                                    partition,\n                                    message\n                                }) => {\n                console.log({\n                    value: message.value.toString(),\n                })\n            },\n        })\n    )\n)\n"))),(0,a.kt)(o.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'package main\n\nimport (\n    "crypto/tls"\n    "crypto/x509"\n    "fmt"\n    "github.com/Shopify/sarama"\n    "github.com/sirupsen/logrus"\n    "io/ioutil"\n    "time"\n)\n\nconst (\n    kafkaAddr     = "kafka.kafka:9092"\n    testTopicName = "mytopic"\n    certFile      = "/var/otterize/credentials/svid.pem"\n    keyFile       = "/var/otterize/credentials/key.pem"\n    rootCAFile    = "/var/otterize/credentials/bundle.pem"\n)\n\nfunc getTLSConfig() (*tls.Config, error) {\n    cert, err := tls.LoadX509KeyPair(certFile, keyFile)\n    if err != nil {\n        return nil, fmt.Errorf("failed loading x509 key pair: %w", err)\n    }\n\n    pool := x509.NewCertPool()\n    rootCAPEM, err := ioutil.ReadFile(rootCAFile)\n    if err != nil {\n        return nil, fmt.Errorf("failed loading root CA PEM file: %w ", err)\n    }\n    pool.AppendCertsFromPEM(rootCAPEM)\n\n    return &tls.Config{\n        Certificates: []tls.Certificate{cert},\n        RootCAs:      pool,\n    }, nil\n}\n\nfunc send_messages(producer sarama.SyncProducer) {\n    i := 1\n    for {\n        msg := fmt.Sprintf("Message %d [sent by client]", i)\n        _, _, err := producer.SendMessage(&sarama.ProducerMessage{\n            Topic:     testTopicName,\n            Partition: -1,\n            Value:     sarama.StringEncoder(msg),\n        })\n        if err != nil {\n            return\n        }\n        fmt.Printf("Sent message - %s\\n", msg)\n        time.Sleep(1 * time.Second)\n        i++\n    }\n}\n\nfunc loop_kafka() error {\n    addrs := []string{kafkaAddr}\n\n    config := sarama.NewConfig()\n    fmt.Println("Loading mTLS certificates")\n    config.Net.TLS.Enable = true\n    tlsConfig, err := getTLSConfig()\n    if err != nil {\n        return err\n    }\n    config.Net.TLS.Config = tlsConfig\n    fmt.Println("Connecting to Kafka")\n    config.Net.DialTimeout = 5 * time.Second\n    config.Net.ReadTimeout = 5 * time.Second\n    config.Net.WriteTimeout = 5 * time.Second\n    client, err := sarama.NewClient(addrs, config)\n    if err != nil {\n        return err\n    }\n    fmt.Println("Creating a producer and a consumer for -", testTopicName)\n    config.Producer.Return.Successes = true\n    config.Producer.Timeout = 5 * time.Second\n    config.Consumer.MaxWaitTime = 5 * time.Second\n    config.Producer.Return.Errors = true\n    config.Consumer.Return.Errors = true\n    producer, err := sarama.NewSyncProducerFromClient(client)\n    if err != nil {\n        return err\n    }\n\n    consumer, err := sarama.NewConsumerFromClient(client)\n    if err != nil {\n        return err\n    }\n    fmt.Println("Sending messages")\n    go send_messages(producer)\n\n    partConsumer, err := consumer.ConsumePartition(testTopicName, 0, 0)\n    if err != nil {\n        return err\n    }\n\n    for msg := range partConsumer.Messages() {\n        fmt.Printf("Read message - %s\\n", msg.Value)\n    }\n    return nil\n}\n\nfunc main() {\n    for {\n        err := loop_kafka()\n        logrus.WithError(err).Println()\n        fmt.Println("Loop exited")\n        time.Sleep(2 * time.Second)\n    }\n}\n\n'))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from kafka import KafkaConsumer\n\nssl_kwargs = dict(\n    security_protocol=\'SSL\',\n    ssl_cafile="/var/otterize/credentials/bundle.pem",\n    ssl_keyfile="/var/otterize/credentials/key.pem",\n    ssl_certfile="/var/otterize/credentials/svid.pem",\n)\n\nconsumer = KafkaConsumer(\n    "test",\n    bootstrap_servers=["kafka.kafka:9092"],\n    **ssl_kwargs)\n\nprint("Connected to kafka consumer")\nfor message in consumer:\n    print("Read Kafka message: " + str(message))\n\n'))),(0,a.kt)(o.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},"You can use Kafka's builtin kafka-console-consumer.sh script to connect to Kafka. The script requires the credentials to be generated in the JKS format.",(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kafka-console-consumer.sh \\\n   --bootstrap-server kafka.kafka:9092 \\\n   -topic mytopic \\\n   --consumer.config client.properties\n"))),(0,a.kt)(o.Z,{value:"client.properties",label:"client.properties",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"security.protocol=SSL\nssl.keystore.location=/var/otterize/credentials/kafka.keystore.jks\nssl.keystore.password=password\nssl.truststore.location=/var/otterize/credentials/kafka.truststore.jks\nssl.truststore.password=password\n")))))),(0,a.kt)("h2",{id:"verify-generated-credentials"},"Verify generated credentials"),(0,a.kt)("p",null,"We can use openssl to inspect the generated certificates. The certificates are stored as ",(0,a.kt)("inlineCode",{parentName:"p"},"K8s secrets")," and are also\n",(0,a.kt)("inlineCode",{parentName:"p"},"mounted")," into containers."),(0,a.kt)("p",null,"We will first retrieve them with one of the following options"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"secret-direct",label:"K8s secret",default:!0,mdxType:"TabItem"},"To retrieve the credentials from the K8s secrets store use:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get secret -n otterize-tutorial-mtls client-credentials-secret -o jsonpath='{.data.svid\\.pem}' | base64 -d > svid.pem\n"))),(0,a.kt)(o.Z,{value:"secret-pod",label:"K8s pod mount",default:!0,mdxType:"TabItem"},"To retrieve the credentials from the container mount use:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -n otterize-tutorial-mtls -it deploy/client -- cat /var/otterize/credentials/svid.pem > svid.pem\n")))),(0,a.kt)("p",null,"And then inspect them with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"openssl x509 -in svid.pem -text | head -n 15\n")),(0,a.kt)("p",null,"   You should see a similar output to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-x509"},"Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number:\n            0b:eb:eb:4d:0e:02:7e:28:93:30:1c:55:26:22:8b:c7\n        Signature Algorithm: sha256WithRSAEncryption\n        Issuer: C = US, O = SPIRE\n        Validity\n            Not Before: Aug 24 12:19:57 2022 GMT\n            Not After : Sep 23 12:20:07 2022 GMT\n# highlight-next-line\n        Subject: C = US, O = SPIRE, CN = client.otterize-tutorial-mtls       # the client's name\n        Subject Public Key Info:\n            Public Key Algorithm: id-ecPublicKey\n                Public-Key: (256 bit)\n                pub:\n")),(0,a.kt)("p",null,"You can see that Otterize generated an X.509 keypair using the pod's name ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," and namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"otterize-tutorial-mtls"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"client.otterize-tutorial-mtls"),".\nThe certificate belongs to a chain of trust starting at the SPIRE server."),(0,a.kt)("h4",{id:"what-happened-behind-the-scenes"},"What happened behind the scenes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We annotated the pods to let Otterize know it should generate mTLS credentials."),(0,a.kt)("li",{parentName:"ol"},"The Otterize SPIRE integration operator",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Created an entries for the annotated pods with the SPIRE server."),(0,a.kt)("li",{parentName:"ol"},"Generated matching mTLS credentials using the SPIRE server."),(0,a.kt)("li",{parentName:"ol"},"Stored the mTLS credentials into a K8s secrets."))),(0,a.kt)("li",{parentName:"ol"},"The secrets were mounted (separately) into each pod's container."),(0,a.kt)("li",{parentName:"ol"},"The pods communicated with each other over HTTP using mutual TLS.")),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn how to configure your existing code to use mTLS for ",(0,a.kt)("a",{parentName:"li",href:"/service-identities/using-credentials/#http"},"HTTPS"),"\n(clients and servers) and for ",(0,a.kt)("a",{parentName:"li",href:"/service-identities/using-credentials/#kafka"},"Kafka clients"),"."),(0,a.kt)("li",{parentName:"ul"},"Configure secure access between pods and Kafka with this ",(0,a.kt)("a",{parentName:"li",href:"/guides/ibac-for-k8s-kafka/"},"guide"),".")))}m.isMDXComponent=!0}}]);