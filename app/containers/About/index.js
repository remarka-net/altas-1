
import React from 'react';
import './index.css';
import { render } from "react-dom";
import Attention from '../../components/attention/index';
import car1 from './car1.jpg';
import car2 from './car1_2.jpg';
import ContactInfo from '../../components/contact_info/index';

export default class About extends React.Component {
  render() {
    // change code below this line
    return (
      <div id="m_part">
        
      <div className="Info_head">
        <p className="subtitle fancy">
          <span>ТОВ “ALTAS”</span>
        </p>
      </div>

        <article class="first_text">
      <h1>Почему выбирают нас?</h1>
      <p>
      Сделать процесс ремонта, обслуживания и переоснащения автомобиля максимально комфортным для клиента.

Чтобы ее реализовать, мы подходим к решению каждого вопроса со стороны клиента. Понимаем, что у него мало времени и нет желания переплачивать. Поэтому готовы забрать автомобиль из любой точки Харькова и вернуть его после ремонта. И так − в каждой детали. Начиная от организации зоны отдыха для клиентов и заканчивая прозрачной и понятной системой ценообразования.
      </p>
      <p>
      Честность. Стараемся не приукрашивать наши возможности. Предлагаем клиентам только те услуги, в которых они реально нуждаются. Говорим все как есть. Если ремонт обойдется дорого, предупреждаем об этом сразу. 

Ответственность. Понимаем, что от качества нашей работы зависит безопасность водителя и пассажиров. Поэтому трижды проверим автомобиль перед тем, как отдать его клиенту. 

Профессионализм. Работаем по технической документации, полученной от автопроизводителей. Ничего не выдумываем сами, строго следуем техрегламенту. Применяем только оригинальное оборудование и те инструменты, которые рекомендуют производители автомобилей. 

Конкурентность. Устанавливаем цены на уровне рыночных или даже ниже. Не стараемся заработать все деньги. Понимаем, что ремонт автомобиля, это не то, на что клиент желает тратить много денег.

Комплексный подход. Делаем все работы “под ключ”. Чтобы клиенту не нужно было ехать в другое место. Даже программируем сигнализации и ключи, чего нет ни на одном другом СТО в Харькове. 

Комфорт. Наши клиенты не должны испытывать никаких трудностей или неудобств. Нужно − подвезем от автосервиса до метро или в иное удобное место. Готовы остаться после завершения рабочего дня, если требуется срочный ремонт. И да, всегда моем машину перед тем, как вернуть ее владельцу.
Работаем с автомобилями от “А” и до “Я”. Принимаем американские, японские и европейские машины. Выполняем все − начиная от мелкого ремонта или замены масла, заканчивая заменой двигателей, русификацией американских машин и перенастройкой ходовой. 
      </p>
      <p>
      Проводим плановое и внеплановое техническое обслуживание − замену расходников, диагностику состояния узлов, настройку основных агрегатов. Действуем согласно регламенту автопроизводителя. Вы можете не сомневаться − мы всегда сделаем лучше, чем даже на брендовом автосервисе.

Обслуживаем не только новые авто, но и машины с большим пробегом. Даем советы по эксплуатации, помогаем владельцам максимально продлить срок службы.
      </p>

      <Attention />
      <p>
      Равным образом консультация с широким активом требуют определения и уточнения модели развития. Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.
С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.
Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.
      </p>
      <p>
      Если у вас есть какие то интересные предложения, обращайтесь! Студия Web-Boss всегда готова решить любую задачу. Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.
      </p>
      <ul className="car_gallery">
        <li><img src={car1} alt=" the car"/></li>
        <li><img src={car2} alt="the car 2"/></li>
      </ul>

      <p>
      Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу. Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.
      </p>
      <p>
      Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.
      </p>


      </article>

      <div className="map_contacts">
        <h4>Наши котакты</h4>
        <div className="infoBlock">
          <p className="textBlock1">
            Адрес: <br />
            г. Киев, Дарнцикий р-н , <br />
            ул. Автопарковая 12/1 <br />
            Телефон:(098) 964-53-12 <br />
            Е-mail:autoservice@gmail.com
          </p>
          <p className="textBlock2">
            Время работы: <br />
            понедельник-пятница: <br />
            8.00 - 22.00 <br />
            суббота, воскресенье: <br />
            10.00 - 22.00 <br />
          </p>
        </div>

        <ContactInfo />
      </div>

      
      </div>

    );
  }
};

