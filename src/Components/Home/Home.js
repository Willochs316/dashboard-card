/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Paragraph from '../../commons/Paragraph';
import CardIcon from '../../commons/CardIcons';
import { FaSearch } from 'react-icons/fa';
import './Home.css';
import { Svgs } from '../../Assets/svgs';
import client_img from '../../Assets/images/client_img.png';

const Home = () => {
  return (
    <div id='home-container'>
      <div className='header'>
        <div className='serach_field-area'>
          <form action='#'>
            <div className='search_field_content'>
              <input
                className='search_field'
                type='text'
                placeholder='Search here...'
              />
            </div>

            <button type='submit' className='search-button'>
              <CardIcon icons={FaSearch} className='fas fa-search' />
            </button>
          </form>
        </div>

        <div className='header-right-content'>
          <div className='header-notification'>
            <Svgs.bell_svg className='icon_svg' />
            <Svgs.msg_svg className='icon_svg' />
          </div>
          <div className='profile-info'>
            <img src={client_img} alt='client_img' className='client_img' />
          </div>
        </div>
      </div>

      <div className='dashboard-container'>
        <div className='dashboard-item-container'>
          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph className='dashboard-amount' title='Balance' />
          </div>

          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph className='dashboard-amount' title='Total Deposit' />
          </div>

          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph className='dashboard-amount' title='Total Withdrawn' />
          </div>

          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph className='dashboard-amount' title='Pending Balance' />
          </div>
        </div>

        <div className='dashboard-item-container'>
          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph className='dashboard-amount' title='Projected Payment' />
          </div>
          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph className='dashboard-amount' title='Payment hold' />
          </div>

          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph
              className='dashboard-amount'
              title='Completed count payment'
            />
          </div>

          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph
              className='dashboard-amount'
              title='Release Count Payment'
            />
          </div>
        </div>

        <div className='dashboard-item-container'>
          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph
              className='dashboard-amount'
              title='Count Released Payment'
            />
          </div>
          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph className='dashboard-amount' title='Disputed Amount' />
          </div>
          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph className='dashboard-amount' title='Resolved payment' />
          </div>
          <div className='dashboard-item'>
            <img src='./icons8-naira-24.png' id='naira-icon' alt='naira-icon' />
            <Paragraph
              className='dashboard-amount'
              title='Count Support Ticket'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
