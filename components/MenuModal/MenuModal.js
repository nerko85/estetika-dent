import React, {useState} from 'react'
import styled from 'styled-components';
import { services } from '../../data/services';
import Link from 'next/dist/client/link';

export default function MenuModal() {
    return (
        <StyledModal>
            <ul>
                {
                services.map(service=>(
                    <li>
                        <Link href={`/services/${service.slug}`}>
                            <a>{service.title}</a>
                        </Link>
                    </li>
                ))
                }
            </ul>
        </StyledModal>
    )
}

const StyledModal = styled.div`
    border:1px ${({theme})=>theme.gold} solid;
    padding:4rem 8rem;
    border-radius:3rem;
    position:absolute;
    z-index:99999;
    top:10rem;
    background:rgba(20, 28, 94, .7); 
    ul {
        list-style:none;
        display:flex;
        flex-direction:column;
        li {
            padding:1rem 0!important;
            a {
            font-size:3rem;
            text-transform:uppercase;
            }
        }
    }

    @media(max-width:${({theme})=>theme.tablet}){
        display:none;
    }
` 
