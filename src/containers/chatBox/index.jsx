import React from 'react';
import Link from 'next/link';

import MessageBot from '@/components/messages/messageBot';
import MessageUser from '@/components/messages/messageUser';

import { cormorantGaramond } from "@/utils/fonts";

import { Root, ContainerHeaderChat, Name, Statut, ContainerBox, ContainerIntro, Intro, ContainerChat, Button } from './chatBox.styled';

export default function ChatBox () {
    return (
        <Root>
            
            <ContainerHeaderChat>
                <Name className={cormorantGaramond.variable}>Mickaël TURQUAIS</Name>
                <Statut className={cormorantGaramond.variable}>En ligne</Statut>
            </ContainerHeaderChat>
            <ContainerBox>
                <ContainerIntro>
                    <Intro className={cormorantGaramond.variable}>Cher visiteur, permettez-moi de vous guider à travers cet échange qui vous permettra de découvrir votre hôte.</Intro>
                </ContainerIntro>
                <ContainerChat>
                    <MessageUser>Bonjour</MessageUser>
                    <MessageBot>Bonjour, comment puis-je vous aider ?</MessageBot>
                    <MessageUser>Pouvez-vous vous présenter brièvement ?</MessageUser>
                    <MessageBot>Volontier ! Je suis Mickaël, développeur web spécialisé front-end avec 18 mois d&apos;expérience dans le domaine.</MessageBot>
                    <MessageUser>Quel est votre parcours professionnel ?</MessageUser>
                    <MessageBot>
                        Mon parcours professionnel est remarquablement varié, ayant débuté dans des domaines tels que la comptabilité, les ressources humaines, et même les systèmes d&apos;information des ressources humaines (SIRH). J&apos;ai toujours eu une curiosité insatiable et une volonté de découvrir de nouvelles choses, ce qui m&apos;a permis d&apos;explorer différents secteurs et de développer une gamme variée de compétences.<br/><br/>
                        Mon amour pour la programmation a commencé pendant la période du COVID-19, lorsque de nouveaux besoins ont émergé dans mon environnement professionnel. C&apos;est alors que j&apos;ai découvert le langage de programmation Visual Basic et commencé à créer mes premières applications en utilisant des macros dans Excel. Cette expérience m&apos;a ouvert les yeux sur les possibilités infinies offertes par le codage et m&apos;a donné soif d&apos;apprendre davantage.<br/><br/>
                        Déterminé à rendre cette passion pour le code plus tangible, j&apos;ai pris la décision de me réorienter vers le métier de développeur web, en me spécialisant particulièrement dans le développement front-end. Je suis convaincu que ma diversité d&apos;expérience, ma curiosité naturelle et ma passion pour le code font de moi un candidat idéal pour relever les défis du développement web.
                    </MessageBot>
                    <MessageUser>Quelles sont vos compétences en développement web ?</MessageUser>
                    <MessageBot>Je suis spécialisé dans la création de sites web innovants et performants en utilisant des technologies de pointe telles que React, Next.js pour le frontend, et Node.js avec MongoDB pour le backend. Que vous souhaitiez un site vitrine ou une application web avec des fonctionnalités avancées, je suis là pour concrétiser vos idées de manière innovante et captivante.</MessageBot>
                    <MessageUser>Pourriez-vous partager des exemples de projets sur lesquels vous avez travaillé ?</MessageUser>
                    <MessageBot>
                        Vous pouvez trouver une sélection de mes principaux projets variés dans la section portfolio.<br/><br/>
                        <Link href="/#portfolio">
                            <Button className={cormorantGaramond.variable}>Portfolio</Button>
                        </Link>
                    </MessageBot>
                    <MessageUser>Pouvez-vous décrire votre processus de développement ?</MessageUser>
                    <MessageBot>Mon processus de développement commence par une phase d&apos;analyse approfondie des besoins du client. Ensuite, je travaille sur la conception et la planification du projet, en m&apos;assurant de bien comprendre les objectifs finaux. Une fois que nous avons une vision claire, je passe à la phase de développement, en utilisant des méthodologies agiles pour garantir une flexibilité et une réactivité maximales aux besoins changeants. Tout au long du processus, je m&apos;efforce de maintenir une communication ouverte et régulière avec le client pour m&apos;assurer que le projet avance dans la bonne direction.</MessageBot>
                    <MessageUser>Comment préférez-vous communiquer avec vos clients pendant le projet ?</MessageUser>
                    <MessageBot>Je préfère communiquer avec mes clients par le biais de réunions régulières, d&apos;e-mails et de chats vidéo. Cela permet d&apos;assurer une communication fluide et de répondre rapidement aux questions ou préoccupations du client. Je suis également ouvert à l&apos;utilisation d&apos;autres outils de communication selon les préférences du client.</MessageBot>
                    <MessageUser>Êtes-vous à l&apos;aise de travailler en équipe avec d&apos;autres développeurs ou designers ?</MessageUser>
                    <MessageBot>Je suis totalement à l&apos;aise de travailler en équipe avec d&apos;autres développeurs, designers ou membres de l&apos;équipe projet. Je crois fermement que la collaboration est essentielle pour produire les meilleurs résultats. Je suis ouvert et réceptif aux idées et perspectives des autres membres de l&apos;équipe, reconnaissant que chacun apporte une valeur unique à la table. Je suis convaincu que travailler avec une équipe diversifiée enrichit non seulement le projet lui-même, mais aussi ma propre croissance professionnelle et mes compétences en tant que développeur.</MessageBot>
                    <MessageUser>Comment assurez-vous la transparence et la clarté tout au long du projet ?</MessageUser>
                    <MessageBot>Pour assurer la transparence et la clarté tout au long du projet, je veille à maintenir une communication ouverte avec le client. Cela comprend la fourniture de mises à jour régulières sur l&apos;avancement du projet, la clarification des exigences et des délais, et la gestion des attentes du client. Je suis également transparent sur les défis rencontrés et les solutions proposées pour les surmonter.</MessageBot>
                    <MessageUser>Quel est votre structure de tarification ?</MessageUser>
                    <MessageBot>
                        Ma structure de tarification dépend généralement de la portée et de la complexité du projet. Je vous invite à consulter les informations dans la section tarifs.<br/><br/>
                        <Link href="/#price">
                            <Button className={cormorantGaramond.variable}>Tarifs</Button>
                        </Link>
                    </MessageBot>
                    <MessageUser>Quels sont vos atouts distinctifs qui vous différencient des autres professionnels du secteur ?</MessageUser>
                    <MessageBot>Ce qui me distingue, c&apos;est mon engagement absolu envers la satisfaction du client. Ma priorité est de m&apos;assurer que mes clients obtiennent une valeur exceptionnelle pour leur investissement. Je m&apos;efforce constamment de comprendre les besoins uniques de chaque client et de fournir des solutions sur mesure qui dépassent leurs attentes. Mon approche est profondément axée sur le client, mettant en avant leur vision et leurs objectifs. Avec mon expérience diversifiée et mes compétences techniques solides, je suis en mesure de transformer cette vision en réalité. De plus, je m&apos;engage à maintenir une communication ouverte et transparente à chaque étape du projet, garantissant que vous êtes toujours informé et satisfait du progrès réalisé.</MessageBot>
                    <MessageUser>Êtes-vous disponible pour commencer un nouveau projet ?"</MessageUser>
                    <MessageBot>
                        Si vous êtes intéressé par la possibilité de travailler ensemble sur votre projet, je vous encourage à poursuivre sur la section contact. Cela nous permettra d&apos;échanger davantage et de discuter des détails de votre projet, afin de déterminer comment je pourrais vous aider à atteindre vos objectifs.<br/><br/>
                        <Link href="/#contact">
                            <Button className={cormorantGaramond.variable}>Contact</Button>
                        </Link>
                    </MessageBot>
                </ContainerChat>
            </ContainerBox>
        </Root>
    );
};
