import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './print.scss';
import profileStore from '../../stores/profileStore';

const Print = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const handlePrint = () => {
    window.print();
  };

  const profile = profileStore();
  const [profileName, setProfileName] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [profileNumber1, setProfileNumber1] = useState('');
  const [profileNumber2, setProfileNumber2] = useState('');
  const [profileBuilding, setProfileBuilding] = useState('');
  const [profileStreet, setProfileStreet] = useState('');
  const [profileCity, setProfileCity] = useState('');
  const [profileCountry, setProfileCountry] = useState('');
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    profile.getProfiles().then(() => {
      if (profile.profiles && profile.profiles.length > 0) {
        setProfileName(profile.profiles[0].name);
        setProfilePic(profile.profiles[0].logo);
        setProfileEmail(profile.profiles[0].email);
        setProfileNumber1(profile.profiles[0].number1);
        setProfileNumber2(profile.profiles[0].number2);
        setProfileBuilding(profile.profiles[0].building);
        setProfileStreet(profile.profiles[0].street);
        setProfileCity(profile.profiles[0].city);
        setProfileCountry(profile.profiles[0].country);
      }
    });
  }, [profile]);

  // const store = authStore();
  // const [userInfo, setUserInfo] = useState(null);
  // useEffect(() => {
  //   const storedUserInfo = localStorage.getItem('userInfo');
  //   if (storedUserInfo) {
  //     setUserInfo(JSON.parse(storedUserInfo));
  //   }
  // }, []);

  let totalDoe = item.doePrice * item.clientDoeCount;
  let totalBuck = item.buckPrice * item.clientBuckCount;
  let totalKit = item.kitPrice * item.clientKitCount;
  //let totalManure = item.ManurePrice * item.clientManureCount;

  // let totalDoe = item.doePrice || 0 * item.clientDoeCount || 0;
  // let totalBuck = item.buckPrice || 0 * item.clientBuckCount || 0;
  // let totalKit = item.kitPrice || 0 * item.clientKitCount || 0;
  // let totalManure = item.ManurePrice || 0 * item.clientManureCount || 0;

  // let totals =
  //   totalDoe || 0 + totalBuck || 0 + totalKit || 0 + totalManure || 0;
  let totals = totalDoe + totalBuck + totalKit;

  return (
    <div
      className="font1"
      style={{
        width: '100vw',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        //fontWeight: '700',
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          //width: '800px',
          width: '70%',
          //backgroundColor: 'pink',
          margin: '50px',
          padding: '50px',
        }}
      >
        <div className="businessDetails" style={{ textAlign: 'right' }}>
          <>
            <img src={profilePic} alt="Logo" width={100} />
            <h3>{profileName}</h3>
            <h6>{profileBuilding}</h6>
            <h6>{profileStreet}</h6>
            <h6>{profileCity}</h6>
            <h6>{profileCountry}</h6>
            <h6>{profileEmail}</h6>
            <h6>{profileNumber1}</h6>
            <h6>{profileNumber2}</h6>
          </>
        </div>
        <h1>INVOICE</h1>
        <div className="invoiceDetails">
          {item && (
            <>
              <div
                className="clientDetails"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div>
                  <p>{item.clientName}</p>
                  <p>{item.clientNumber}</p>
                  <p>{item.clientEmail}</p>
                </div>
                <p>{Date().slice(0, 15)}</p>
              </div>
              <div className="purchaseDetails">
                <Table className="tables">
                  <thead variant="dark">
                    <tr>
                      <th></th>
                      <th>ITEM</th>
                      <th>UNIT PRICE</th>
                      <th>UNITS</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>DOE</td>
                      <td>{item.doePrice}</td>
                      <td>{item.clientDoeCount}</td>
                      <td>{totalDoe}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>BUCK</td>
                      <td>{item?.buckPrice}</td>
                      <td>{item.clientBuckCount}</td>
                      <td>{totalBuck}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>KIT</td>
                      <td>{item.kitPrice}</td>
                      <td>{item.clientKitCount}</td>
                      <td>{totalKit}</td>
                    </tr>
                    {/* <tr>
                      <td>4</td>
                      <td>MANURE</td>
                      <td>{item.clientManurePrice}</td>
                      <td>{item.manurePrice}</td>
                      <td>{totalManure}</td>
                    </tr> */}
                    <tr className="totals">
                      <td colSpan={4}>TOTAL</td>
                      <td>{totals}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </>
          )}
        </div>
        <div
          className="printCommand"
          style={{ textAlign: 'right', marginTop: '40px' }}
        >
          <span className="print" onClick={handlePrint}>
            Print
          </span>
        </div>
      </div>
    </div>
  );
};

export default Print;
