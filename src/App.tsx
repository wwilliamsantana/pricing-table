import { Check, Info } from "@phosphor-icons/react";
import { Button, Card, CardContainer, Inner, TitleWrapper } from "./style/home";

export function App() {
  return (
      <CardContainer>
          <Card className="essentials">
            <Inner>
              <p>para você começar</p>
              <TitleWrapper>
                <strong>Essentials</strong>
                <span>R$<strong>19,97/mês</strong></span>
              </TitleWrapper>
              <Button>Assinar agora</Button>

              <ul>
                <li>
                  <Check size={20}/>
                  <span>Até 3 usuários</span>
                  <Info size={16}/>
                </li>
                <li>
                  <Check size={20}/>
                  <span>Até 3 usuários</span>
                  <Info size={16}/>
                </li>
              </ul>
            </Inner>
          </Card>

          <Card className="ultimate best">
            <Inner>
              <p>Para você decolar</p>
              <TitleWrapper>
                <strong>Ultimate</strong>
                <span>R$<strong>29,97/mês</strong></span>
              </TitleWrapper>
              <Button>Assinar agora</Button>

              <ul>
                <li>
                  <Check size={20}/>
                  <span>Usuários ilimitados</span>
                  <Info size={16}/>
                </li>
                <li>
                  <Check size={20}/>
                  <span>Suporte 24/7</span>
                  <Info size={16}/>
                </li>
                <li>
                  <Check size={20}/>
                  <span>CSM Dedicado</span>
                  <Info size={16}/>
                </li>
                <li>
                  <Check size={20}/>
                  <span>Treinamentos</span>
                  <Info size={16}/>
                </li>
              </ul>
            </Inner>
          </Card>

          <Card className="enterprise">
            <Inner>
              <p>Para sua empresa</p>
              <TitleWrapper>
                <strong>Enterprise</strong>
                
              </TitleWrapper>
              <Button>Fale com a gente</Button>

              <ul>
                <li>
                  <Check size={20}/>
                  <span>Plano customizado especialmente para a necessidade de seu negocio</span>
                </li>
              </ul>
            </Inner>
          </Card>
      </CardContainer>

  )
}


