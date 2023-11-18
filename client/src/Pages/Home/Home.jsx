import React from 'react';
import './Home.style.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { SiHomebridge } from 'react-icons/si';

export default function Home() {
  const logo = <SiHomebridge />

  const navigate = useNavigate()

  function startRegister() {
    navigate('/register')
  }

  return (
    <div className="cardWrapper">
      <Card title="Welcome to Sadhu_Hub" icon={logo}>
        <p className='text'>
          We’re working hard to get Sadhu_Hub ready for everyone! While we
          wrap up the finishing touches, we’re adding people gradually to make
          sure nothing breaks :)
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className="signinWrapper">
          <span className="hasInvite">Have an invite text?</span>
          <Link className="signInLinkStyle" to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
}
