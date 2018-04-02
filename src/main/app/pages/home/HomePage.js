import React from 'react';
import './home.scss';
import {Title} from '../../components/title/Title';
import {Subtitle} from '../../components/subtitle/Subtitle';
import {SectionTitle} from '../../components/section-title/SectionTitle';
import {BlockTitle} from '../../components/block-title/BlockTitle';
import {BlockText} from '../../components/block-text/BlockText';
import {InputLabel} from '../../components/input-label/InputLabel';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';

export function HomePage() {
  return (
    <div className="home">
      <div className="home__container">
        <Title className="home__title">
          Furnas
        </Title>
        <Subtitle className="home__subtitle">
          Дизайн и верстка Landing page
        </Subtitle>
        <SectionTitle className="home__process-section-title">
          Процесс
        </SectionTitle>
        <div className="home__process">
          <div className="home__process-block">
            <BlockTitle className="home__process-block-title">
              Интервью
            </BlockTitle>
            <BlockText>
              Мы задаем вопросы - вы отвечаете.
              <br/>
              Документируем требования к будущему прототипу.
              <br/>
              Длительность этапа: 1 день.
              <br/>
              Платите в конце этапа, только если довольны работой: 5000 руб.
            </BlockText>
          </div>
          <div className="home__process-block">
            <BlockTitle className="home__process-block-title">
              UX прототип
            </BlockTitle>
            <BlockText>
              Схематично рисуем Landing page.
              <br/>
              Определяем расположение информационных блоков, их содержание.
              Показываем, обсуждаем.
              <br/>
              Длительность этапа: 2 дня.
              <br/>
              Платите в конце этапа, только если довольны работой: 10000 руб.
            </BlockText>
          </div>
          <div className="home__process-block">
            <BlockTitle className="home__process-block-title">
              Финальный дизайн
            </BlockTitle>
            <BlockText>
              Вы получаете полностью готовый дизайн в виде sketch файла и pdf.
              <br/>
              Длительность этапа: 3 дня.
              <br/>
              Платите в конце этапа, только если довольны работой: 10000 руб.
            </BlockText>
          </div>
          <div className="home__process-block">
            <BlockTitle className="home__process-block-title">
              Верстка
            </BlockTitle>
            <BlockText>
              Получаете разработанный Landing page в виде архива с html, js и css кодом.
              <br/>
              Длительность этапа: 2 дня.
              <br/>
              Платите в конце этапа, только если довольны работой: 10000 руб.
            </BlockText>
          </div>
          <div className="home__process-block">
            <BlockTitle className="home__process-block-title">
              Запуск
            </BlockTitle>
            <BlockText>
              Ваш Landing page доступен пользователям.
              <br/>
              Длительность этапа: 2 дня.
              <br/>
              Платите в конце этапа, только если довольны работой: 10000 руб.
            </BlockText>
          </div>
        </div>
        <SectionTitle className="home__order-section-title">
          Заказать
        </SectionTitle>
        <InputLabel className="home__order-input-label">
          Как с вами связаться (телефон, почта, skype)
        </InputLabel>
        <div className="home__order-row">
          <Input className="home__order-input"/>
          <Button className="home__order-button">
            Заказать
          </Button>
        </div>
      </div>
    </div>
  );

}
