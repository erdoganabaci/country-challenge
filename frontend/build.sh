NAME='country-challenge-frontend:latest'

docker build -t "$NAME" .

docker run -p 3000:3000  -d "$NAME"