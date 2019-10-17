Message queue with RabbitMQ as broker & NodeJS

#### Install Package
```bash
$ npm install
```

#### Run Consumer
```bash
$ node consumer.js
```

#### Run Producer
```bash
$ node producer.js
```

#### Using RabbitMQ Container
- **Build Images**
```bash
$ docker build -f Dockerfile.rabbitmq -t rabbitmq:management .
```

- **Run Container**
```bash	
$ docker run -dt -p 15672:15672 -p 5672:5672  --name my-rabbit rabbitmq:management
```

#### RabbitMQ Documentation
- [Instalation](https://www.rabbitmq.com/download.html "Instalation")
- [Getting started](https://www.rabbitmq.com/getstarted.html "Getting started")
