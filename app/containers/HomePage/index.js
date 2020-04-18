/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import './index.css';
import MyForm from '../../components/MyForm/Form';
import Image from './image.jpg';
import ContactInfo from '../../components/contact_info';

{
  /* import { Map, GoogleApiWrapper } from 'google-maps-react';
import ContactInfo from '../../components/contact_info/index'; */
}

export default function Fruits() {

  return (
    <div className="main_wrapper">
      <div id="main_div">
        <div id="MainPart">
          <br />
          <h2 className="main_header">
            Добро пожаловать
          </h2>
          <div className="Main_items">
            <div className="car_item1">
              <span>Автоподбор</span>
            </div>
            <div className="car_item1_extend">
              Выезздная проверка,эксперт на день,подбор под ключ.
            </div>

            <div className="car_item2">
              <span>Диагностика</span>
            </div>
            <div className="car_item2_extend">
              Электроники,двигателя,ходовой части.
            </div>

            <div className="car_item3">
              <span>Пригон под ключ</span>
            </div>
            <div className="car_item3_extend">
              Литва,Германия,Польша.
            </div>

            <div className="car_item4">
              <span>Покраска и кузовные работы</span>
            </div>
            <div className="car_item4_extend">
              Рихтовка,Покраска,Полировка.
            </div>

            <div className="car_item5">
              <span>Станция Технического Обслуживания</span>
            </div>
            <div className="car_item5_extend">
              Шиномонтаж,замена расходников,ремонт двигателя и подвески.
            </div>

            <div className="car_item6">
              <span>Автозвук</span>
            </div>
            <div className="car_item6_extend">
              Консультация,установка,настройка.
            </div>
    
            <div className="car_item7">
              <span>Проверка</span>
            </div>
            <div className="car_item7_extend">
              проверка.
            </div>
          </div>


          {/* -----------------------------------------------------END OF ORDER FORM--------------------------------------------------------*/}

          {/* -----------------------------------------------------END OF ORDER FORM--------------------------------------------------------*/}
        </div>{' '}
        {/* #MainPart */}
      </div>{' '}
      {/* MainDiv */}
      <div className="our_service">
        <h3 className="second_headline">
          Предлагаем Бесплатную услугу автоподбора
        </h3>

      <div className="service_block">
        <MyForm />
        <figure>
          <img src={Image} alt="image" />
          <figcaption>Автоподбор</figcaption>
        </figure>
        </div>

        <article className="service_auto_info">
          Теперь заботы о Вашем авто разделены с ALTAS
                      Спасибо за выбор!
        </article>
        <article className="mobile_service_auto_info">
          Теперь заботы о Вашем авто разделены с ALTAS
                      Спасибо за выбор!
        </article>
      </div>{' '}
      {/* Our_service */}
      <div className="map_contacts">
        <h4>Наши контакты</h4>
        <div className="infoBlock">
          <p className="textBlock1">
            Адрес: <br />
            г.Фастов <br />
            ул.Соборная <br />
            Телефон:(+380)63-738-91-93 <br />
            Е-mail: altascars1@gmail.com
          </p>
          <p className="textBlock2">
            Время работы: <br />
            понедельник-пятница: <br />
            8.00 - 22.00 <br />
            суббота, воскресенье: <br />
            10.00 - 22.00 <br />
          </p>
        </div>

        {/* <ContactInfo /> */}
      </div>
      {/* MainWrapper */}
    </div>
  );
}
