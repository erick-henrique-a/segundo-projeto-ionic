import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import { getRegistrations } from '../data/registrationStorage';
import './Cadastrados.css';

const Cadastrados: React.FC = () => {
  const registrations = getRegistrations();

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cadastrados</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="cadastrados-content">
        <div className="cadastrados-list">
          {registrations.length === 0 ? (
            <IonCard>
              <IonCardContent>Nenhum cadastro encontrado.</IonCardContent>
              <IonItem lines="none">
                <IonButton routerLink="/register" color="success">Fazer cadastro</IonButton>
              </IonItem>
            </IonCard>
          ) : registrations.map((registration, index) => (
            <IonCard key={`${registration.email}-${index}`}>
              <IonCardHeader>
                <IonCardTitle color="success">{registration.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonLabel>
                    <h2>E-mail</h2>
                    <p>{registration.email}</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Telefone</h2>
                    <p>{registration.phone}</p>
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          ))}
          {registrations.length > 0 && (
            <IonButton routerLink="/register" color="success">Novo cadastro</IonButton>
          )}
        </div>
      </IonContent>
    </>
  );
};

export default Cadastrados;