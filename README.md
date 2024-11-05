## Construir imagen del proyecto
```bash
docker build -f apexpress .
```

```bash
cd k8s
kubectl create apexpress
kubectl create deployment apexpress --image=apexpress --dry-run=client -o yaml >deployment.yml

helm install apexpress .

```
### Para actualizar cambios
```bash
helm upgrade apexpress .
```

### Archivo de manifiesto

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  labels:
    app: apexpress
  name: apexpress
spec:
  replicas: 1
  selector:
    matchLabels:
      app: apexpress
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: apexpress
    spec:
      containers:
      - image: apexpress:latest
        name: apexpress
        imagePullPolicy: IfNotPresent
        resources: {}
status: {}
```