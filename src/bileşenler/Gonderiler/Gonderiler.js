import React from 'react';
import Gonderi from './Gonderi';
import './Gonderiler.css';

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiBegeniFonk, gonderiListesi } = props;

  return (
    <div className="posts-container-wrapper">
      {gonderiListesi.map((item) => {
        return (
          <div key={item.id}>
            <Gonderi herbirGonderi={item} begenelimFonk={gonderiBegeniFonk} />
          </div>
        );
      })}
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
