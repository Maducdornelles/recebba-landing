import Image from 'next/image';
import {
  ArrowRight,
  BarChart3,
  Check,
  MessageCircle,
  Send,
  Sparkles,
  Zap,
} from 'lucide-react';

import { Logo } from './Logo';
import styles from './landing.module.css';

const productScreens = [
  {
    eyebrow: '01',
    title: 'Dashboard financeiro',
    description:
      'Recebimentos, vencidos e os clientes que pedem atenção em uma visão única.',
    image: '/screens/dashboard.jpeg',
    alt: 'Dashboard real do Recebba',
    width: 1179,
    height: 625,
  },
  {
    eyebrow: '02',
    title: 'Conversa com clientes',
    description:
      'O histórico da cobrança fica centralizado, sem perder o contexto de cada fatura.',
    image: '/screens/conversa.jpeg',
    alt: 'Tela real de conversas do Recebba',
    width: 1179,
    height: 644,
  },
  {
    eyebrow: '03',
    title: 'Integrações',
    description:
      'WhatsApp e Telegram conectados à mesma operação financeira.',
    image: '/screens/integracoes.jpeg',
    alt: 'Tela real de integrações do Recebba',
    width: 1179,
    height: 633,
  },
] as const;

const plans = [
  {
    name: 'Inicial',
    price: 'R$ 99',
    period: '/mês',
    setup: 'Implantação R$ 299',
    description:
      'Para começar a organizar e automatizar a rotina de cobrança.',
    features: [
      'Contas a receber organizadas',
      'Régua de cobrança',
      'WhatsApp e Telegram',
    ],
  },
  {
    name: 'Growth',
    price: 'R$ 299',
    period: '/mês',
    setup: 'Implantação R$ 499',
    description:
      'Para operações com mais volume e necessidade de acompanhamento.',
    features: [
      'Tudo do Inicial',
      'Interpretação de respostas com IA',
      'Visão operacional ampliada',
    ],
    featured: true,
  },
  {
    name: 'Pro',
    price: 'R$ 599',
    period: '/mês',
    setup: 'Implantação R$ 799',
    description:
      'Para equipes que precisam de mais escala, controle e integração.',
    features: [
      'Tudo do Growth',
      'Regras mais completas',
      'Integrações e suporte ampliados',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    setup: 'Implantação sob análise',
    description:
      'Para empresas com filiais, múltiplos CNPJs e operações mais complexas.',
    features: [
      'Estrutura multiempresa',
      'Integrações sob medida',
      'Desenho conforme a operação',
    ],
  },
] as const;

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={styles.wordmarkInner}>
      <Logo
        size={38}
        variant={light ? 'light' : 'dark'}
        title={null}
      />

      <strong className={light ? styles.wordmarkLight : undefined}>
        Recebba
      </strong>
    </span>
  );
}

function PhoneMockup() {
  return (
    <div
      className={styles.phone}
      aria-label="Exemplo visual de conversa de cobrança no celular"
    >
      <div className={styles.phoneSideButtonTop} />
      <div className={styles.phoneSideButtonBottom} />

      <div className={styles.phoneScreen}>
        <div className={styles.dynamicIsland} />

        <div className={styles.phoneStatus}>
          <span>9:41</span>
          <span>••• 5G ▰</span>
        </div>

        <div className={styles.chatHeader}>
          <span className={styles.backChevron}>‹</span>

          <span className={styles.chatAvatar}>
            LB
          </span>

          <span className={styles.chatIdentity}>
            <strong>Logística Brasil</strong>
            <small>online</small>
          </span>
        </div>

        <div className={styles.chatBody}>
          <div className={styles.incomingBubble}>
            <b>Recebba</b>

            <span>
              Olá! A FAT-1230 vence em breve. Posso enviar o Pix para
              pagamento?
            </span>

            <small>10:32</small>
          </div>

          <div className={styles.outgoingBubble}>
            <span>Pode sim!</span>
            <small>10:34 ✓✓</small>
          </div>

          <div className={styles.incomingBubble}>
            <b>Recebba</b>

            <span>
              Perfeito. Segue o código Pix. Assim que o pagamento for
              confirmado, te aviso por aqui.
            </span>

            <small>10:34</small>
          </div>

          <div className={styles.pixCard}>
            <span className={styles.pixMark}>
              ◆
            </span>

            <span>
              <small>Valor da cobrança</small>
              <strong>R$ 4.320,00</strong>
              <em>FAT-1230 · Logística Brasil</em>
            </span>

            <button
              type="button"
              tabIndex={-1}
            >
              Copiar Pix
            </button>
          </div>
        </div>

        <div className={styles.chatComposer}>
          <span>Digite uma mensagem...</span>
          <Send size={15} />
        </div>
      </div>
    </div>
  );
}

function LaptopMockup() {
  return (
    <div
      className={styles.laptop}
      aria-label="Dashboard real do Recebba exibido em um notebook"
    >
      <div className={styles.laptopLid}>
        <div className={styles.cameraDot} />

        <div className={styles.laptopScreen}>
          <Image
            src="/screens/dashboard.jpeg"
            alt="Dashboard real do Recebba"
            fill
            priority
            unoptimized
            sizes="(max-width: 760px) 92vw, (max-width: 1060px) 720px, 560px"
            className={styles.dashboardImage}
          />
        </div>
      </div>

      <div className={styles.laptopBase}>
        <span />
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main
      className={styles.page}
      id="inicio"
    >
      <header className={styles.header}>
        <div className={styles.navbar}>
          <a
            href="#inicio"
            className={styles.brand}
            aria-label="Recebba — início"
          >
            <Wordmark />
          </a>

          <nav
            className={styles.navLinks}
            aria-label="Navegação principal"
          >
            <a href="#produto">
              Produto
            </a>

            <a href="#solucoes">
              Soluções
            </a>

            <a href="#como-funciona">
              Como funciona
            </a>

            <a href="#planos">
              Planos
            </a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}>
            Automação de contas a receber
          </span>

          <h1>
            Cobranças no ritmo do seu caixa.
          </h1>

          <p>
            O Recebba automatiza contas a receber, conversa com clientes via
            WhatsApp e Telegram, interpreta respostas com IA e ajuda sua
            empresa a acompanhar a cobrança com mais clareza.
          </p>

          <div className={styles.channelLine}>
            <span className={styles.channelLabel}>
              Integra com os principais canais
            </span>

            <span className={styles.channelItem}>
              <MessageCircle size={17} />
              WhatsApp
            </span>

            <span className={styles.channelItem}>
              <Send size={17} />
              Telegram
            </span>

            <span className={styles.channelItem}>
              <Sparkles size={17} />
              IA
            </span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div
            className={styles.heroBlob}
            aria-hidden="true"
          />

          <LaptopMockup />
          <PhoneMockup />
        </div>
      </section>

      <section
        id="solucoes"
        className={styles.featureSection}
      >
        <div className={styles.featureGrid}>
          <article className={styles.featureCard}>
            <span className={styles.featureIcon}>
              <Zap size={20} />
            </span>

            <h2>
              Automatize a cobrança
            </h2>

            <p>
              Organize lembretes e próximas ações sem depender de
              acompanhamento manual a cada fatura.
            </p>
          </article>

          <article className={styles.featureCard}>
            <span className={styles.featureIcon}>
              <MessageCircle size={20} />
            </span>

            <h2>
              Centralize conversas
            </h2>

            <p>
              WhatsApp e Telegram ficam conectados ao histórico da cobrança
              e ao contexto do cliente.
            </p>
          </article>

          <article className={styles.featureCard}>
            <span className={styles.featureIcon}>
              <BarChart3 size={20} />
            </span>

            <h2>
              Acompanhe a carteira
            </h2>

            <p>
              Visualize recebimentos, vencidos e inadimplentes em tempo real
              para decidir com mais clareza.
            </p>
          </article>
        </div>
      </section>

      <section
        id="produto"
        className={styles.productSection}
      >
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              Produto
            </span>

            <h2>
              Veja o Recebba em ação
            </h2>
          </div>

          <p>
            Conheça as principais telas da plataforma e como a operação fica
            organizada em um só lugar.
          </p>
        </div>

        <div className={styles.screenGrid}>
          {productScreens.map((screen) => (
            <article
              className={styles.screenCard}
              key={screen.title}
            >
              <div className={styles.screenFrame}>
                <Image
                  src={screen.image}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  sizes="(max-width: 760px) 94vw, (max-width: 1060px) 46vw, 390px"
                  unoptimized
                  className={styles.screenImage}
                />
              </div>

              <span className={styles.screenNumber}>
                {screen.eyebrow}
              </span>

              <h3>
                {screen.title}
              </h3>

              <p>
                {screen.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="como-funciona"
        className={styles.flowSection}
      >
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              Como funciona
            </span>

            <h2>
              Do primeiro contato ao recebimento
            </h2>
          </div>

          <p>
            Um fluxo simples para acompanhar a cobrança sem perder contexto
            no caminho.
          </p>
        </div>

        <div className={styles.steps}>
          <article>
            <span>01</span>

            <strong>
              Importe clientes e contas
            </strong>

            <small>
              Organize sua carteira de recebíveis.
            </small>
          </article>

          <ArrowRight className={styles.stepArrow} />

          <article>
            <span>02</span>

            <strong>
              Configure a cobrança
            </strong>

            <small>
              Defina regras, prazos e mensagens.
            </small>
          </article>

          <ArrowRight className={styles.stepArrow} />

          <article>
            <span>03</span>

            <strong>
              Receba as respostas
            </strong>

            <small>
              O cliente responde pelo canal habitual.
            </small>
          </article>

          <ArrowRight className={styles.stepArrow} />

          <article>
            <span>04</span>

            <strong>
              A IA interpreta
            </strong>

            <small>
              Promessas, pedidos e objeções ganham contexto.
            </small>
          </article>

          <ArrowRight className={styles.stepArrow} />

          <article>
            <span>05</span>

            <strong>
              Acompanhe os resultados
            </strong>

            <small>
              Veja a evolução da carteira no painel.
            </small>
          </article>
        </div>
      </section>

      <section
        id="planos"
        className={styles.pricingSection}
      >
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              Planos
            </span>

            <h2>
              Planos de referência
            </h2>
          </div>

          <p>
            Soluções para diferentes estágios de crescimento, com
            flexibilidade para a realidade de cada operação.
          </p>
        </div>

        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.planCard} ${
                'featured' in plan && plan.featured
                  ? styles.planFeatured
                  : ''
              }`}
            >
              {'featured' in plan && plan.featured ? (
                <span className={styles.planBadge}>
                  Mais indicado
                </span>
              ) : null}

              <span className={styles.planName}>
                {plan.name}
              </span>

              <div className={styles.planPrice}>
                <strong>
                  {plan.price}
                </strong>

                {plan.period ? (
                  <small>
                    {plan.period}
                  </small>
                ) : null}
              </div>

              <span className={styles.planSetup}>
                {plan.setup}
              </span>

              <p>
                {plan.description}
              </p>

              <div className={styles.planDivider} />

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={15} />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className={styles.planDisclaimer}>
          Os valores podem variar sob análise.
        </p>
      </section>

      <section
        id="contato"
        className={styles.finalCta}
      >
        <div className={styles.finalContent}>
          <span className={styles.finalEyebrow}>
            Recebba
          </span>

          <h2>
            Uma forma mais inteligente de organizar a cobrança da sua empresa.
          </h2>

          <p>
            Conheça a plataforma, entenda o fluxo e veja como o Recebba pode se
            encaixar na sua operação.
          </p>
        </div>

        <div
          className={styles.finalBrandArt}
          aria-hidden="true"
        >
          <Logo
            size={86}
            variant="light"
            title={null}
          />

          <span>
            R→
          </span>
        </div>
      </section>

      <footer className={styles.footer}>
        <Wordmark />

        <span>
          Automação inteligente de contas a receber B2B.
        </span>

        <small>
          © 2026 Recebba.
        </small>
      </footer>
    </main>
  );
}