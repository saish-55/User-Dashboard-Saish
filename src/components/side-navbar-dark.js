import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './side-navbar-dark.css'

const SideNavbarDark = (props) => {
  return (
    <div className="side-navbar-dark-side-navbar">
      <Link to="/" className="side-navbar-dark-navlink">
        <div className="side-navbar-dark-l-o-g-o">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="side-navbar-dark-image"
          />
        </div>
      </Link>
      <Link to="/home-dark" className="side-navbar-dark-navlink1">
        <div className="side-navbar-dark-dashboard">
          <svg viewBox="0 0 1024 1024" className="side-navbar-dark-icon">
            <path d="M949.845 446.635c-144.64-121.771-407.296-348.629-409.899-350.933l-27.947-24.021-27.819 24.021c-2.645 2.261-265.429 229.035-412.16 351.915-18.688 16.811-29.355 40.32-29.355 64.384 0 47.104 38.229 85.333 85.333 85.333h42.667v256c0 47.104 38.229 85.333 85.333 85.333h128 384c47.104 0 85.333-38.229 85.333-85.333v-256h42.667c47.104 0 85.333-38.229 85.333-85.333 0-25.515-11.733-49.536-31.488-65.365zM597.333 853.333h-170.667v-213.333h170.667v213.333zM768 512l0.085 341.333c-0.085 0-128.085 0-128.085 0v-256h-256v256h-128v-341.333h-128.043c117.973-98.645 312.107-265.685 384.043-327.68 71.936 61.995 265.984 228.992 384 327.723 0-0-128-0-128-0.043z"></path>
          </svg>
          <button className="side-navbar-dark-button button">
            {props.button}
          </button>
        </div>
      </Link>
      <Link to="/login-dark" className="side-navbar-dark-navlink2">
        <div className="side-navbar-dark-user">
          <button className="side-navbar-dark-button1 button">
            {props.button1}
          </button>
          <svg viewBox="0 0 1024 1024" className="side-navbar-dark-icon02">
            <path d="M896 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-341.333c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h341.333c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM725.333 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM640 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496z"></path>
          </svg>
        </div>
      </Link>
      <div className="side-navbar-dark-projects">
        <button className="side-navbar-dark-button2 button">
          {props.button2}
        </button>
        <svg viewBox="0 0 1024 1024" className="side-navbar-dark-icon04">
          <path d="M865.664 661.376c-41.301 97.664-118.229 169.301-209.323 206.293s-196.224 39.125-293.888-2.176-169.301-118.229-206.293-209.323-39.168-196.267 2.133-293.931c39.936-94.464 113.152-164.523 200.064-202.368 21.589-9.429 31.488-34.56 22.101-56.149s-34.56-31.488-56.149-22.101c-106.197 46.251-195.797 132.011-244.608 247.381-50.475 119.381-47.744 247.979-2.645 359.211s132.779 205.397 252.117 255.872 247.979 47.744 359.211 2.645 205.397-132.779 255.872-252.117c9.173-21.717-0.981-46.72-22.699-55.936s-46.72 0.981-55.936 22.699zM893.653 469.333h-338.987v-338.987c89.003 9.813 168.789 50.048 228.864 110.123s100.309 139.861 110.123 228.864zM981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472c-23.552 0-42.667 19.115-42.667 42.667v426.667c0 23.552 19.115 42.667 42.667 42.667h426.667c23.552 0 42.667-19.115 42.667-42.667z"></path>
        </svg>
      </div>
      <div className="side-navbar-dark-message">
        <button className="side-navbar-dark-button3 button">
          {props.button3}
        </button>
        <svg viewBox="0 0 1024 1024" className="side-navbar-dark-icon06">
          <path d="M938.667 640v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-597.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 10.923 4.181 21.845 12.501 30.165 16.683 16.683 43.691 16.683 60.331 0l158.165-158.165h494.336c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM853.333 640c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.443 4.779-30.165 12.501l-97.835 97.835v-579.669c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"></path>
        </svg>
      </div>
      <div className="side-navbar-dark-events">
        <button className="side-navbar-dark-button4 button">
          {props.button4}
        </button>
        <svg viewBox="0 0 1024 1024" className="side-navbar-dark-icon08">
          <path d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"></path>
        </svg>
      </div>
      <div className="side-navbar-dark-reports">
        <button className="side-navbar-dark-button5 button">
          {props.button5}
        </button>
        <svg viewBox="0 0 1024 1024" className="side-navbar-dark-icon10">
          <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
          <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
        </svg>
      </div>
      <div className="side-navbar-dark-payments">
        <button className="side-navbar-dark-button6 button">
          {props.button6}
        </button>
        <svg viewBox="0 0 1024 1024" className="side-navbar-dark-icon15">
          <path d="M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM96 192h832c17.346 0 32 14.654 32 32v96h-896v-96c0-17.346 14.654-32 32-32zM928 832h-832c-17.346 0-32-14.654-32-32v-288h896v288c0 17.346-14.654 32-32 32zM128 640h64v128h-64zM256 640h64v128h-64zM384 640h64v128h-64z"></path>
        </svg>
      </div>
      <div className="side-navbar-dark-settings">
        <button className="side-navbar-dark-button7 button">
          {props.button7}
        </button>
        <svg viewBox="0 0 1024 1024" className="side-navbar-dark-icon17">
          <path d="M682.667 512c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 512c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM866.773 657.237c1.963-4.48 4.779-8.149 8.192-10.965 4.779-3.925 10.709-6.229 17.195-6.272h3.84c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496-14.379-67.413-37.504-90.496-55.168-37.504-90.496-37.504h-6.784c-4.693-0.043-9.173-1.195-13.141-3.243-5.419-2.816-9.813-7.339-12.459-13.312-0.128-1.237-0.171-2.517-0.171-3.797-1.963-4.523-2.731-9.344-2.304-13.995 0.512-6.187 3.072-12.075 7.424-16.512l2.645-2.645c24.96-25.003 37.461-57.856 37.419-90.539s-12.544-65.536-37.589-90.539c-25.003-24.96-57.856-37.461-90.539-37.419s-65.536 12.544-90.453 37.504l-2.005 1.963c-3.541 3.413-7.808 5.803-12.288 7.083-5.973 1.664-12.416 1.365-18.645-1.408-4.309-1.877-7.979-4.693-10.795-8.107-3.968-4.779-6.272-10.709-6.315-17.195v-3.84c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496v6.784c-0.043 4.693-1.195 9.173-3.243 13.141-2.816 5.419-7.339 9.813-13.312 12.459-1.237 0.128-2.517 0.171-3.797 0.171-4.523 1.963-9.344 2.731-13.995 2.304-6.187-0.555-12.117-3.072-16.555-7.424l-2.645-2.645c-25.003-24.96-57.813-37.461-90.539-37.461s-65.493 12.544-90.539 37.632c-24.96 25.003-37.461 57.813-37.461 90.539s12.544 65.536 37.504 90.453l2.048 2.005c3.413 3.541 5.803 7.808 7.083 12.288 1.664 5.973 1.365 12.416-1.323 18.517-0.256 0.683-0.555 1.451-0.896 2.219-1.749 4.651-4.608 8.661-8.149 11.733-4.693 4.053-10.667 6.528-16.341 6.656h-3.84c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.211-37.504 90.539 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504h6.784c4.693 0.043 9.173 1.195 13.141 3.243 5.461 2.859 9.941 7.424 12.629 13.696 1.963 4.523 2.731 9.344 2.304 13.995-0.512 6.187-3.072 12.075-7.424 16.512l-2.645 2.645c-24.96 25.003-37.461 57.856-37.419 90.539s12.544 65.536 37.589 90.539c25.003 24.96 57.856 37.461 90.539 37.419s65.536-12.544 90.453-37.504l2.005-2.048c3.541-3.413 7.808-5.803 12.288-7.083 5.973-1.664 12.416-1.365 18.517 1.323 0.683 0.256 1.451 0.555 2.219 0.896 4.651 1.749 8.661 4.608 11.733 8.149 4.053 4.693 6.528 10.667 6.656 16.341v3.925c0 35.328 14.379 67.413 37.504 90.496s55.211 37.504 90.539 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496v-6.784c0.043-4.693 1.195-9.173 3.243-13.141 2.859-5.461 7.424-9.941 13.696-12.629 4.523-1.963 9.344-2.731 13.995-2.304 6.187 0.512 12.075 3.072 16.512 7.424l2.645 2.645c25.003 24.96 57.856 37.461 90.539 37.419s65.536-12.544 90.539-37.589c24.96-25.003 37.461-57.856 37.419-90.539s-12.544-65.536-37.504-90.453l-2.048-2.005c-3.413-3.541-5.803-7.808-7.083-12.288-1.664-5.973-1.365-12.416 1.323-18.517zM788.693 622.763c-10.965 24.832-12.288 51.627-5.419 76.032 5.077 18.048 14.549 34.731 27.819 48.512l3.072 3.115c8.363 8.363 12.544 19.2 12.544 30.165s-4.139 21.845-12.459 30.165c-8.405 8.405-19.243 12.587-30.251 12.587s-21.845-4.139-30.165-12.459l-2.603-2.603c-19.755-19.328-44.373-29.952-69.589-32.085-18.645-1.579-37.632 1.451-55.168 9.045-24.661 10.581-43.819 29.141-55.467 51.456-8.235 15.829-12.715 33.493-12.928 51.669v7.723c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.416-30.165 12.416-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165v-3.84c-0.64-28.16-10.88-52.992-27.477-72.192-12.117-13.995-27.563-24.96-45.141-31.787-24.533-10.496-50.901-11.691-74.923-4.949-18.048 5.077-34.731 14.549-48.512 27.819l-3.115 3.072c-8.363 8.363-19.2 12.544-30.165 12.544s-21.845-4.139-30.165-12.459c-8.405-8.405-12.587-19.243-12.587-30.251s4.139-21.845 12.459-30.165l2.603-2.603c19.328-19.755 29.952-44.373 32.085-69.589 1.579-18.645-1.451-37.632-9.045-55.168-10.581-24.661-29.141-43.819-51.456-55.467-15.829-8.235-33.493-12.715-51.669-12.928l-7.637 0.043c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501h3.84c28.16-0.64 52.992-10.88 72.192-27.477 13.995-12.117 24.96-27.563 31.787-45.141 10.496-24.533 11.648-50.901 4.907-74.923-5.077-18.048-14.549-34.731-27.819-48.469l-3.115-3.115c-8.363-8.363-12.544-19.2-12.544-30.165s4.139-21.845 12.459-30.165c8.405-8.405 19.243-12.587 30.251-12.587s21.845 4.139 30.165 12.459l2.603 2.603c19.755 19.328 44.373 29.952 69.589 32.085 15.787 1.365 31.787-0.597 46.976-5.845 4.096-0.512 7.979-1.579 11.477-3.115 24.832-10.624 43.947-29.184 55.595-51.541 8.277-15.787 12.757-33.493 12.971-51.627v-7.723c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165v3.84c0.128 27.179 9.728 52.053 25.728 71.467 11.349 13.781 25.899 24.789 42.496 32.043 24.661 10.88 51.456 12.203 75.861 5.376 18.048-5.077 34.731-14.549 48.512-27.819l3.115-3.072c8.363-8.363 19.2-12.544 30.165-12.544s21.845 4.139 30.165 12.459c8.405 8.405 12.587 19.243 12.587 30.251s-4.139 21.845-12.459 30.165l-2.603 2.603c-19.328 19.755-29.952 44.373-32.085 69.589-1.365 15.787 0.597 31.787 5.845 46.976 0.512 4.096 1.579 7.979 3.115 11.477 10.624 24.832 29.184 43.947 51.541 55.595 15.829 8.235 33.493 12.715 51.669 12.928h7.68c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165-4.736 22.4-12.501 30.165-18.389 12.501-30.165 12.501h-3.84c-27.179 0.128-52.053 9.728-71.467 25.728-13.781 11.349-24.789 25.899-32 42.368z"></path>
        </svg>
      </div>
    </div>
  )
}

SideNavbarDark.defaultProps = {
  button5: 'Reports',
  button7: 'Settings',
  button3: 'Messages',
  button2: 'Projects',
  button6: 'Payments',
  image_alt: 'image',
  button1: 'User',
  button4: 'Events',
  button: 'Dashboard',
  image_src: '/playground_assets/kronos-removebg-preview-300h.png',
}

SideNavbarDark.propTypes = {
  button5: PropTypes.string,
  button7: PropTypes.string,
  button3: PropTypes.string,
  button2: PropTypes.string,
  button6: PropTypes.string,
  image_alt: PropTypes.string,
  button1: PropTypes.string,
  button4: PropTypes.string,
  button: PropTypes.string,
  image_src: PropTypes.string,
}

export default SideNavbarDark
