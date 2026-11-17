import { useState, type FormEvent } from 'react';
import { IonCard, IonButton, IonItem, IonInput, IonCardContent, IonCardHeader, IonCardTitle, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonText } from '@ionic/react';
import { useNavigate } from 'react-router-dom';
import { saveRegistration } from '../data/registrationStorage';
import './Register.css';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [phone, setPhone] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== passwordConfirmation) {
            setPasswordError('As senhas não coincidem.');
            return;
        }

        setPasswordError('');
        saveRegistration({ name, email, phone });
        navigate('/cadastrados');
    };

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

            <form onSubmit={handleSubmit}>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle color="success">Cadastro de informações</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonItem>
                            <IonInput required type="text" label="Nome" labelPlacement="floating" placeholder="Insira o seu nome" value={name} onIonInput={(event) => setName(event.detail.value ?? '')}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput required type="email" label="E-mail" labelPlacement="floating" placeholder="Insira o seu e-mail" value={email} onIonInput={(event) => setEmail(event.detail.value ?? '')}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput required type="password" label="Senha" labelPlacement="floating" placeholder="Insira a sua senha" value={password} onIonInput={(event) => setPassword(event.detail.value ?? '')}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput required type="password" label="Confirme sua senha" labelPlacement="floating" placeholder="Confirme a sua senha" value={passwordConfirmation} onIonInput={(event) => setPasswordConfirmation(event.detail.value ?? '')}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput required type="tel" label="Telefone" labelPlacement="floating" placeholder="Insira o seu telefone" value={phone} onIonInput={(event) => setPhone(event.detail.value ?? '')}></IonInput>
                        </IonItem>

                        {passwordError && <IonText color="danger"><p>{passwordError}</p></IonText>}

                        <IonButton type="submit" expand="block" color="success">Confirma</IonButton>
                    </IonCardContent>
                </IonCard>
            </form>
        </div>
    );
};

export default Register;
