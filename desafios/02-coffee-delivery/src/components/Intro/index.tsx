import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BannerContainer, IconsContent } from "./styles";

import banner from '../../assets/banner.png'

export function Intro() {
  return ( 
    <BannerContainer>
      <div className="ContentText">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <IconsContent>
          <div>
            <span>
              <ShoppingCart size={20} weight="fill"/>
              Compra simples e segura
            </span>
            <span>
              <Package size={20} weight="fill"/>
              Embalagem mantém o café intacto
            </span>
            <span>
              <Timer size={20} weight="fill"/>
              Entrega rápida e rastreada
            </span>
            <span>
              <Coffee size={20} weight="fill"/>
              O café chega fresquinho até você
            </span>
          </div>
        </IconsContent>
      </div>
      <div>
        <img src={banner} alt="imagem Coffer Delivery" />
      </div>
    </BannerContainer>
   );
}

