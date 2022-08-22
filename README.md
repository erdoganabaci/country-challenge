# Welcome to FullStack Country and Exchange Challenge

The goal of this test is to retrieve data from several restful web services, store the data in a database and report the results back to the end-user.

### Technologies Used
<p>
<img src="https://img.shields.io/badge/-Expressjs%20-%23323330?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react" >   
<img src="https://img.shields.io/badge/-Nodejs%20-%23323330?style=for-the-badge&logo=Node.js&logoColor=green">
<img src="https://img.shields.io/badge/-Cypress%20-black?style=for-the-badge&logo=cypress&logoColor=white">
<img src="https://img.shields.io/badge/-Vercel%20-black?style=for-the-badge&logo=vercel&logoColor=white">
<img src="https://img.shields.io/badge/-Heroku%20-purple?style=for-the-badge&logo=heroku&logoColor=white">
<img src="https://img.shields.io/badge/-Docker%20-blue?style=for-the-badge&logo=Docker&logoColor=white">
<img src="https://img.shields.io/badge/-Kubernetes%20-blue?style=for-the-badge&logo=Kubernetes&logoColor=white">
<img src="https://img.shields.io/badge/-Mongo%20-brightGreen?style=for-the-badge&logo=MongoDB&logoColor=white">
</p>


[Demo](https://country-challenge.vercel.app/dashboard)
## Important!
**Before starting to react be sure the backend is working. If you click the demo link wait for 10 seconds backend Heroku server will awake soon then you can show the country information**

![CountryInformation](images/countryDashboard.png)


### Getting Started
1. Clone this repo
2. `npm install` on both `frontend` and `backend` folders
3. `npm start`


### Run with Docker
1. Each backend and frontend folder has a Dockerfile and `build.sh` you can simply run `build.sh`.
2. When you write `docker ps` command you will see like below images both frontend and backend works fine.

![Docker](images/docker.png)

### Run with Kubernetes
1. Open K8S folder.
2. First write `minikube start` command in terminal and be sure attach local docker deamon images to minikube `eval $(minikube -p minikube docker-env)` then apply each yaml `kubectl apply -f backend-deployment.yaml` and `kubectl apply -f  frontend-deployment.yaml`
3. Access pod from browser using port forward command `kubectl port-forward country-challenge-frontend-755f5b789b-crwbd 3000:3000`

![Kubernetes-Pods](images/k8s.png)

