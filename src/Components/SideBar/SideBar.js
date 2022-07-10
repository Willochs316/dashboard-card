import CardIcon from '../../commons/CardIcons';
import {
  FaChartBar,
  FaCog,
  FaHome,
  FaSlidersH,
  FaStream,
  FaUser,
} from 'react-icons/fa';
import './SideBar.css';
import Paragraph from '../../commons/Paragraph';
import finance_logo from '../../Assets/images/finance_logo.png';

const SideBar = () => {
  return (
    <div id='sidebar'>
      <div className='sidebar-header'>
        <img src={finance_logo} alt='finance_logo' className='finance_logo'/>
      </div>

      <div id='navigation-list'>
        <div className='list-tags'>
          <CardIcon icons={FaHome} className='fas fa-icon' />
          <Paragraph className='dashboard' title='Dashboard' />
        </div>

        <section className='combobox-container'>
          <div
            id='comboid'
            role='combobox'
            aria-controls=''
            aria-expanded='false'
            aria-owns='listbox'
            aria-haspopup='listbox'
          >
            <label className='combo-label'>
              <CardIcon icons={FaChartBar} />
            </label>
            <input
              id='cname'
              type='text'
              aria-autocomplete='list'
              aria-controls='listbox'
              placeholder='Payment.'
            />
          </div>

          <ul
            className='list'
            id='listbox'
            role='listbox'
            tabindex='0'
            aria-multiselectable='true'
          >
            <li>
              <a href='/'>Make payment</a>
            </li>
            <li>
              <a href='/'>Add contact</a>
            </li>
            <li>
              <a href='/'>Other</a>
            </li>
          </ul>
        </section>

        <div className='list-tags'>
          <CardIcon icons={FaSlidersH} className='fas fa-icon' />
          <Paragraph className='dashboard' title='Services' />
        </div>
        <div className='list-tags'>
          <CardIcon icons={FaCog} className='fas fa-icon' />
          <Paragraph className='dashboard' title='Settings' />
        </div>
        <div className='list-tags'>
          <CardIcon icons={FaStream} className='fas fa-icon' />
          <Paragraph className='dashboard' title='Features' />
        </div>
        <div className='list-tags'>
          <CardIcon icons={FaUser} className='fas fa-icon' />
          <Paragraph className='dashboard' title='About us' />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
