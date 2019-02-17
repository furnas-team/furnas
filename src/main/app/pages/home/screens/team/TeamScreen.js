import React from 'react';
import {SectionTitle} from '../../../../components/screen-title/ScreenTitle';
import {BlockText} from '../../../../components/block-text/BlockText';
import './team-screen.scss';
import {TextUnderline, UnderlineColor} from '../../../../components/text-underline/TextUnderline';
import {RegularText} from '../../../../components/regular-text/RegularText';
import {Picture} from '../../../../components/picture/Picture';

export class TeamScreen extends React.Component {

  render() {
    return (
      <div className="team-screen">
        <div className="team-screen__text">
          <SectionTitle className="team-screen__title">
            А кто делает?
          </SectionTitle>
          <BlockText>
            Команда из двух человек:
          </BlockText>
          <BlockText>
            <RegularText><TextUnderline underlineColor={UnderlineColor.BLUE}>Frontend Developer</TextUnderline></RegularText> — отвечает за разработку и тексты;
          </BlockText>
          <BlockText>
            <RegularText><TextUnderline underlineColor={UnderlineColor.PINK}>UX/UI Designer</TextUnderline></RegularText> — отвечает за внешний вид лендинга.
          </BlockText>
        </div>
        <Picture className="team-screen__image"
                 imgClassName="team-screen__image-img"
                 forPhoneOnly={[require('./images/team-image_mob.png'), require('./images/team-image_mob.webp')]}
                 forPhoneOnlyRetina={[require('./images/team-image_mob_2x.png'), require('./images/team-image_mob_2x.webp')]}
                 forTabletPortraitUp={[require('./images/team-image.png')]}
                 forTabletPortraitUpRetina={[require('./images/team-image_2x.png')]}
                 alt="furnasteam иллюстрация" />
      </div>
    );
  }

}
