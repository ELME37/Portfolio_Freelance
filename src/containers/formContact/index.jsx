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
        });

      }
  return (
      <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" autoComplete="none" placeholder="Nom"
          {...register('name',
            { required: true,
            onChange: () => setNotification({ message: "", type: "" })
          })}
        />
          <ContainerError>
            {errors.name && <Error>Le nom doit être renseigné</Error>}
          </ContainerError>
        <Input type="email" autoComplete="none" placeholder="Email" 
          {...register('email', 
            { required: true,
              onChange: () => setNotification({ message: "", type: "" })
          })}
        />
          <ContainerError>
            {errors.email && <Error>L&apos;email doit être renseigné</Error>}
          </ContainerError>
 
        <InputArea type="textarea" autoComplete="none" placeholder="Message"
          {...register('message',
            { required: true,
            onChange: () => setNotification({ message: "", type: "" })
          })}
        />
          <ContainerError>
            {errors.message && <Error>La message doit être renseignée</Error>}
          </ContainerError>
        
        <Button type="submit">Envoyer</Button>
        {notification && (
            <Notification type={notification.type}>{notification.message}</Notification>
        )}
      </Form>
  );
};