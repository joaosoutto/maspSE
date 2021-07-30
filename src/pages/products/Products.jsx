import React from "react";

import styles from "./Products.module.css";

import { Link } from "react-router-dom";

import ProductsDiv from "../../components/productsDiv/ProductsDiv";

const Products = () => (
  <section className={`sec animeLeft ${styles.section}`}>
    <h2>
      Áreas de Atuação da <span>MASP</span>:
    </h2>
    <div className={styles.divider} />
    <ProductsDiv />
    <div className={styles.divider} />
    <div className={styles.quote}>
      <p>
        "As normas técnicas e regulamentadoras sempre serão referência e
        parâmetro para a instalação de um SPDA, pois, consideram as melhores
        práticas de engenharia, garantindo a segurança das pessoas, bens e
        estruturas".
      </p>
    </div>
    <div className={styles.divider} />
    <div className={styles.tips}>
      <div className={styles.left}>
        <p>
          No Estado de Minas Gerais, a instalação do SPDA tem como preceito a{" "}
          <span>Lei 14.130/01</span> e o <span>Decreto 44.746/08</span>, que
          dispõe sobre prevenção contra incêndio e pânico.
        </p>
        <p>
          Para os condomínios a instalação e a manutenção do SPDA estão
          associadas ao <span>Art. 1.346</span> do{" "}
          <span>Código Civil Brasileiro</span>, que define a obrigatoriedade do
          seguro da edificação, devendo o síndico proceder com o seguro contra
          incêncio e sinistro que cause destruição, conforme preconiza o{" "}
          <span>Art. 13 da Lei 4.591/64.</span>
        </p>
        <p>
          Ao lado, algumas dicas para evitar os efeitos danosos causados quando
          de descargas atmosféricas em uma edificação.
        </p>
      </div>
      <div className={styles.right}>
        <p>
          <span className={styles.arrow}>{`>>`}</span> Tenha sempre disponível a
          documentação referente à necessidade ou não da instalação do SPDA,
          baseado na norma técnica <span>NBR-5419:2015</span>.
        </p>
        <p>
          <span className={styles.arrow}>{`>>`}</span> Certifique-se que na
          apólice de seguro da edificação a cobertura quanto a sinistros
          provenientes de descargas atmosféricas esteja bem definida.
        </p>
        <p>
          <span className={styles.arrow}>{`>>`}</span> Caso na edificação tenha
          SPDA instalado, mantenha atualizado o relatório (laudo) de inspeção
          periódica
        </p>
        <p>
          <span className={styles.arrow}>{`>>`}</span> Mesmo que não exista na
          edificação um sistema de SPDA, instale os dispositivos de proteção
          contra surtos, estes componentes irão proteger as instalações e
          equipamentos <span>(elevadores, CFTV e portões eletrônicos)</span>,
          contra descargas elétricas provenientes da rede de distribuição
          pública.
        </p>
      </div>
    </div>
    <div className={styles.divider} />
    <div className={styles.contact}>
      <h3>
        Não perca tempo e{" "}
        <Link className={styles.link} to="/contato">
          <span>fale conosco!</span>
        </Link>
        !
      </h3>
    </div>
  </section>
);

export default Products;
