import { Check, Info } from "@phosphor-icons/react";
import { Button, Card, CardContainer, Inner, TitleWrapper } from "./style/home";

export function App() {
  return (
      <CardContainer>
          <Card>
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
      </CardContainer>

  )
}


