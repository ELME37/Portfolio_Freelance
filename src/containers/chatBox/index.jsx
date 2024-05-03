import React from 'react';
import Link from 'next/link';

import MessageBot from '@/components/messages/messageBot';
import MessageUser from '@/components/messages/messageUser';

import { Root, ContainerHeaderChat, Name, Statut, ContainerBox, ContainerIntro, Intro, ContainerChat, Button } from './chatBox.styled';

export default function ChatBox () {
    return (
        <Root>
            
            <ContainerHeaderChat>
                <Name>Mickaël TURQUAIS</Name>
                <Statut>En ligne</Statut>
            </ContainerHeaderChat>
            <ContainerBox>
                <ContainerIntro>
                    <Intro>Cher visiteur, permettez-moi de vous guider à travers cet échange qui vous permettra de découvrir votre hôte.</Intro>
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
                            <Button>Portfolio</Button>
                        </Link>
                    </MessageBot>
                </ContainerChat>
            </ContainerBox>
        </Root>
    );
};
