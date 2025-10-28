pipeline {
    agent any
    tools {
        nodejs "NodeJS-18"
    }

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
                sh 'node index.js &'
            }
        }
    }
}
