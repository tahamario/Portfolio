import { School, Star, Work } from '@mui/icons-material'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Experiences() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#062f64'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    contentStyle={{ borderTop: '3px solid  #062f64' }}
                    contentArrowStyle={{ borderRight: '7px solid  #062f64' }}
                    date='2015 - 2016'
                    iconStyle={{ background: '#062f64', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className='vertical-timeline-element-title'>Baccalauréat</h3>
                    <p>Baccalauréat option physique chimie mention A. Bien</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    contentStyle={{ borderTop: '3px solid  #062f64' }}
                    contentArrowStyle={{ borderRight: '7px solid  #062f64' }}
                    date='2016 - 2018'
                    iconStyle={{ background: '#062f64', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className='vertical-timeline-element-title'>Diplôme Technicien Spécialisé Développement Informatique</h3>
                    <p> Institut Spécialisé de Technologie Appliquée (ISTICG) – Berrechid.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{ borderTop: '3px solid  #FFC436' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FFC436' }}
                    date='04/2018'
                    iconStyle={{ background: '#FFC436', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className='vertical-timeline-element-title'>Stage - Développeur Web PHP</h3>
                    <p>
                        Société CIGT - Un mois – Service de développement informatique.
                        Stage fin d'étude réalisation d’un site web en PHP.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    contentStyle={{ borderTop: '3px solid  #062f64' }}
                    contentArrowStyle={{ borderRight: '7px solid  #062f64' }}
                    date='2018 - 2019'
                    iconStyle={{ background: '#062f64', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className='vertical-timeline-element-title'>Certificat Administrateur de Base de Données</h3>
                    <p>
                        Institut Spécialisé de Technologie Appliquée (CFMOTI NTIC1) - Sidi Maârouf – Casablanca.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{ borderTop: '3px solid  #FFC436' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FFC436' }}
                    date='10/2020 - 11/2020'
                    iconStyle={{ background: '#FFC436', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className='vertical-timeline-element-title'>Stage - Développeur Desktop - WinDev</h3>
                    <p>
                        Société Isium - Un mois et demi – Service de développement informatique.Réalisation
                        d’une application desktop de gestion des facturations en utilisent Wlangage de PCSOFT
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{ borderTop: '3px solid  #FFC436' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FFC436' }}
                    date='11/2020 - 01/2021'
                    iconStyle={{ background: '#FFC436', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className='vertical-timeline-element-title'>Stage - Développeur mobile IONIC-ANGULAR</h3>
                    <p>
                        Société DakiSoft - 3 mois – Service de développement informatique. Réalisation d’une
                        application mobile utilisant le Framework IONIC-Angular.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{ borderTop: '3px solid  #FFC436' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FFC436' }}
                    date='03/2021 - Présent'
                    iconStyle={{ background: '#FFC436', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className='vertical-timeline-element-title'>Full-time - Développeur Full Stack </h3>
                    <p>
                        Société McPharma – Service de développement informatique.
                        <span style={{ display: 'block', fontSize: '14px', margin: '8px 10px', color: '' }}>
                            • Conception, Réalisation d’une application CRM. (Laravel et React JS)
                            (Gérer délègues, plannings, visites, clients, exportation des rapporte …)
                        </span>
                        <span style={{ display: 'block', fontSize: '14px', margin: '5px 10px', color: '' }}>
                            • Conception, Réalisation d’une application Gestion des Stocks. (Laravel)
                            (Gérer Produits, Fournisseurs, Entrées, Sorties, Stocks, Inventaire …)
                        </span>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    contentStyle={{ borderTop: '3px solid  #062f64' }}
                    contentArrowStyle={{ borderRight: '7px solid  #062f64' }}
                    date='2022 - 2023'
                    iconStyle={{ background: '#062f64', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className='vertical-timeline-element-title'>Licence Universitaire Professionnelle Ingénierie De Conception Et
                        De Développement D’applications</h3>
                    <p>
                        Au Faculté des sciences et techniques – Settat.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    iconStyle={{ background: '#062f64', color: '#fff' }}
                    icon={<Star />}
                >
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experiences