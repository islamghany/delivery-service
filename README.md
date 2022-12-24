# Delivery Service

A private delivery service company in Cologne handles the collection and delivery of parcels for people.

## Instlation

first clone the project then go to the folder of the repo.

then go to the project folder;

```bash
cd project
```

then build the docker compose file

```bash
docker compose up --build
```

now to test things up go to the [API Docs]("localhost:8080/api-docs")

and go to the [Dashboard](http://localhost:5173/login)

## features.

### 1. A sender is able create a orders to be delivered by specifying pick-up and drop-off address.

![add orders](./statics/4.png)

### 2. A sender is able to see the status of his orders.

![orders](./statics/2.png)

### 3. A bikeris able to see a list of the orders.

### 4. A biker is able to pick up a parcel.

### 5. Once a parcel is picked up by a biker, it cannot be picked up by other bikers.

### 6. A biker is able to input the timestamp of the pickup and the delivery for each order

### 7. The status of the order should be updated for the sender.

![orders](./statics/3.png)

![orders](./statics/5.png)

![orders](./statics/1.png)
