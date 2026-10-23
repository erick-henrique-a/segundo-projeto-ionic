import { IonCard, IonButton, IonItem, IonInput, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {

  return (
    <div className='tela-login'>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle color="success">App 2</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonItem>
            <IonInput type="email" label="E-mail" labelPlacement="floating" placeholder="Insira o texto"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="password" label="Senha" labelPlacement="floating" placeholder="Insira o texto"></IonInput>
          </IonItem>
          <IonItem>
            <IonButton fill='clear'>Esqueci a senha/e-mail</IonButton>
          </IonItem>
          <IonItem className='teste'>
            <IonButton size='full' color="success">Login</IonButton>
            <IonButton routerLink='/register' size='full' fill='clear'>Cadastre-se</IonButton>
          </IonItem>


        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Login;
