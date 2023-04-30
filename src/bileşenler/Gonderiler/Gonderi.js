import React from 'react';
import Yorumlar from '../Yorumlar/Yorumlar';
import BegenBolumu from './BegenBolumu';
import GonderiBasligi from './GonderiBasligi';

const Gonderi = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { herbirGonderi, begenelimFonk } = props;

  return (
    <div className='post-border'>
      <GonderiBasligi
        username={herbirGonderi.username}
        thumbnailUrl={herbirGonderi.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={herbirGonderi.imageUrl}
        />
      </div>
      {/* BeğenBölümü düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BegenBolumu gonderiyiBegen={() => begenelimFonk(herbirGonderi.id)} begeniSayisi={herbirGonderi.likes}/>
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlar={herbirGonderi.comments}/>
    </div>
  );
};

export default Gonderi;
