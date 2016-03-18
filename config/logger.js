module.exports = {
	name: process.env.LOG_NAME || 'SendNode',
	level: process.env.LOG_LEVEL || 'trace',

	//输出到控制台
	stdout: process.env.LOG_STOUT || true,
	json: process.env.LOG_JSON || false,

	//上报指定日志的服务配置
  report: {
    type: process.env.LOG_KAFKA_TYPE || 'kafka', //类型有：kafka_http、kafka、mongo

    //输出到Kafka
    kafkaConfig: {
      host: process.env.KAFKA_HOST || '192.168.0.176',
      port: process.env.KAFKA_PORT || 9092,
      topic: process.env.KAFKA_TOPIC || 'calllog'
    }
  }
}
