import { IonCard, IonButton, IonItem, IonInput, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import './Register.css';

const Register: React.FC = () => {

    return (
        <div className='tela-register'>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonCard>
                <IonCardHeader>
                    <IonCardTitle color="success">Cadastro de informações</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonItem>
                        <IonInput type="text" label="Nome" labelPlacement="floating" placeholder="Insira o seu nome"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="email" label="E-mail" labelPlacement="floating" placeholder="Insira o texto"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="password" label="Senha" labelPlacement="floating" placeholder="Insira a sua senha"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="password" label="Confirme sua senha" labelPlacement="floating" placeholder="Insira a sua senha"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="tel" label="Telefone" labelPlacement="floating" placeholder="Insira a sua senha"></IonInput>
                    </IonItem>



                    <IonButton size='full' color="success">Confirma</IonButton>



                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default Register;
