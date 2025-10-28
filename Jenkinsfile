pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/hariharan1476/simple-node-webapp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy to Azure VM') {
            steps {
                sshagent(credentials: ['azureuser']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no azureuser@74.225.186.92 "pkill node || true"
                    scp -o StrictHostKeyChecking=no -r * azureuser@74.225.186.92:/home/azureuser/simple-node-webapp
                    ssh azureuser@74.225.186.92 "cd /home/azureuser/simple-node-webapp && nohup node index.js > app.log 2>&1 &"
                    '''
                }
            }
        }
    }
}
