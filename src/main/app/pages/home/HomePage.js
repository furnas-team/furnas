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
import {BlockSubtitle} from '../../components/block-subtitle/BlockSubtitle';
import {Link} from '../../components/link/Link';
import {ThemeName, ThemeProvider} from '../../components/theme-context/ThemeContext';

export function HomePage() {
  return (
    <ThemeProvider value={ThemeName.DARK}>
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
                Общаемся, документируем требования к будущему прототипу.
              </BlockText>
              <BlockSubtitle className="home__process-block-subtitle">
                Время выполнения
              </BlockSubtitle>
              <BlockText>
                1 день
              </BlockText>
              <BlockSubtitle className="home__process-block-subtitle">
                Стоимость
              </BlockSubtitle>
              <BlockText>
                Платите в конце этапа, только если довольный работой: 5&nbsp;000&nbsp;руб.
              </BlockText>
              <Link className="home__expamle-link">
                Пример документации
              </Link>
            </div>
            <div className="home__process-block">
              <BlockTitle className="home__process-block-title">
                Прототип
              </BlockTitle>
              <BlockText className="home__process-block-text-with-margin">
                Схематично рисуем Landing page.
              </BlockText>
              <BlockText className="home__process-block-text-with-margin">
                Определяем расположение информационных блоков, их содержание.
              </BlockText>
              <BlockText>
                Показываем, обсуждаем.
              </BlockText>
              <BlockSubtitle className="home__process-block-subtitle">
                Время выполнения
              </BlockSubtitle>
              <BlockText>
                2 дня
              </BlockText>
              <BlockSubtitle className="home__process-block-subtitle">
                Стоимость
              </BlockSubtitle>
              <BlockText>
                Платите в конце этапа, только если довольный работой: 10&nbsp;000&nbsp;руб.
              </BlockText>
              <Link className="home__expamle-link">
                Пример прототипа
              </Link>
            </div>
            <div className="home__process-block">
              <BlockTitle className="home__process-block-title">
                Дизайн
              </BlockTitle>
              <BlockText>
                Вы получаете полностью готовый дизайн в виде sketch файла и pdf.
              </BlockText>
              <BlockSubtitle className="home__process-block-subtitle">
                Время выполнения
              </BlockSubtitle>
              <BlockText>
                3 дня
              </BlockText>
              <BlockSubtitle className="home__process-block-subtitle">
                Стоимость
              </BlockSubtitle>
              <BlockText>
                Платите в конце этапа, только если довольный работой: 10&nbsp;000&nbsp;руб.
              </BlockText>
              <Link className="home__expamle-link">
                Пример дизайна
              </Link>
            </div>
            <div className="home__process-block">
              <BlockTitle className="home__process-block-title">
                Разработка
              </BlockTitle>
              <BlockText className="home__process-block-text-with-margin">
                Получаете разработанный Landing page в виде архива с html, js и css кодом.
              </BlockText>
              <BlockText>
                Поможем разместить на хостинге, купить домен и разместить рекламу.
              </BlockText>
              <BlockSubtitle className="home__process-block-subtitle">
                Время выполнения
              </BlockSubtitle>
              <BlockText>
                2 - 3 дня
              </BlockText>
              <BlockSubtitle className="home__process-block-subtitle">
                Стоимость
              </BlockSubtitle>
              <BlockText>
                Платите в конце этапа, только если довольный работой: 10&nbsp;000&nbsp;руб.&nbsp;&mdash;&nbsp;30&nbsp;000&nbsp;руб.
              </BlockText>
              <Link className="home__expamle-link">
                Пример кода
              </Link>
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
    </ThemeProvider>
  );

}
