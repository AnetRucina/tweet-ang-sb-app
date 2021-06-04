cd bin\windows

Then run Zookeper server:

zookeeper-server-start.bat ..\..\config\zookeeper.properties

Then run Kafka server:

kafka-server-start.bat ..\..\config\server.properties


ELK-----------
elasticsearch.bat
kibana.bat
logstash.bt -f filepath