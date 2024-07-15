import React, { useState, useRef } from "react"
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import Button from "@/components/button";

import { Form, Input, InputArea, ContainerError, Error, Notification } from "./formContact.styled";

export default function FormContact () {
  const [notification, setNotification] = useState({ message: '', type: '' });
  const form = useRef();

  const { handleSubmit: handleSubmit, reset: reset, register: register, formState: { errors: errors } } = useForm();
  
  const onSubmit = async () => {

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
        .then(() => {
          setNotification({ message: 'Message envoyé avec succès.', type: 'success' });
          reset();
        })
        .catch ((error) => {
          setNotification({ message: "Erreur lors de l'envoi du message", type: 'error' });
          console.log('An error occurred during message send: ', error);
        })
        .finally(() => {
          setTimeout(() => {
            setNotification({ message: '', type: '' });
          }, 5000);
        });
      }
  return (
      <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" autoComplete="none" placeholder="Nom"
          {...register('name',
            { required: true,
              pattern: /^[a-zA-Z0-9\s]*$/,
            onChange: () => setNotification({ message: "", type: "" })
          })}
        />
          <ContainerError>
            {errors.name && <Error>Le nom doit être renseigné / caractères non autorisés</Error>}
          </ContainerError>
        <Input type="email" autoComplete="none" placeholder="Email" 
          {...register('email', 
            { required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              onChange: () => setNotification({ message: "", type: "" })
          })}
        />
          <ContainerError>
            {errors.email && <Error>L&apos;email doit être renseigné / caractères non autorisés</Error>}
          </ContainerError>
 
        <InputArea type="textarea" autoComplete="none" placeholder="Message"
          {...register('message',
            { required: true,
              pattern: /^[a-zA-Z0-9\s.,!?'"()]*$/,
            onChange: () => setNotification({ message: "", type: "" })
          })}
        />
          <ContainerError>
            {errors.message && <Error>La message doit être renseignée / caractères non autorisés</Error>}
          </ContainerError>
        
        <Button type="submit">Envoyer</Button>
        {notification && (
            <Notification type={notification.type}>{notification.message}</Notification>
        )}
      </Form>
  );
};