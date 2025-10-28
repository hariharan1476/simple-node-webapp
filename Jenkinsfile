pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/hariharan1476/simple-node-webapp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'pm2 stop simple-node-webapp || true'
                sh 'pm2 start index.js --name simple-node-webapp'
            }
        }
    }
}
