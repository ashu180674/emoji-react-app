pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your Git repository
                 checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/ashu180674/emoji-react-app.git']]])
            }
        }
        
        stage('Build and Test') {
            steps {
                // Replace these commands with your build and test commands
                sh 'npm install'
                sh 'CI=false npm run build'
                sh 'node html-validation.js'
                sh 'css-validation.js'
        
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                // Archive your build artifacts (e.g., the contents of the "dist" folder)
                archiveArtifacts artifacts: '/var/lib/jenkins/workspace/static-site1/*',allowEmptyArchive: true
            }
        }
    
    
    
           stage('Deploy') {
              steps {
                  
                  withAWS(credentials: '2df2482a-0c91-4eff-95ab-59350a861ec9', region: 'ap-south-1') {
            // Replace 'your-bucket-name' with the name of your S3 bucket
                  sh 'aws s3 sync /var/lib/jenkins/workspace/static-site1/build s3://test-static129'
        }
    }

               
           }

    
    
}
}
