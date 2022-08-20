NAME='country-challenge-backend:latest'

docker build -t "$NAME" .

docker run -p 3001:3001  -d "$NAME"