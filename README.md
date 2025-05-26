# 🏙️ Urbanis - Gerador de Cidades Procedurais

**Status: 🚧 Em desenvolvimento ativo**
<br>
**Versão: v0.1.0 (MVP em progresso)**
<br>
**Demo: urbanis.github.io (em breve)**
<br>

***Screenshot será adicionado em breve***
<br>

## 🎯 Sobre o Projeto
Urbanis é um gerador de cidades procedurais que cria mapas urbanos únicos e realistas usando algoritmos matemáticos avançados. Cada cidade é gerada em tempo real no navegador, sem necessidade de servidor.

## ✨ Features Principais

* 🌍 **Geração Procedural -** Cidades únicas a cada geração
* 🛣️ **Sistema Viário Inteligente -** Ruas principais e secundárias realistas
* 🏢 **Prédios Variados -** Diferentes tipos (residencial, comercial, industrial)
* 🎨 **Customização Visual -** Múltiplas paletas de cores e temas
* 📱 **Interface Responsiva -** Funciona perfeitamente em desktop e mobile
* 🔄 **Sistema de Seeds -** Reproduza e compartilhe suas cidades favoritas
* 📷 **Exportação -** Salve suas criações como imagem HD

## 🚀 Demonstração
```bash<br>
# Clone o repositório
git clone https://github.com/AndrewGouvea/urbanis.git

# Abra o arquivo HTML no navegador
open index.html

# Ou rode localmente (opcional)
python -m http.server 8000
# Acesse: http://localhost:8000
```

## 🛠️ Tecnologias Utilizadas

* __Frontend:__ HTML5, CSS3, JavaScript (ES6+)
* __Renderização:__ Canvas API 2D
* __Algoritmos:__ Perlin Noise, Voronoi Diagrams, L-Systems
* __Design:__ CSS Grid, Flexbox, Gradientes modernos
* __Deploy:__ GitHub Pages

## 🎮 Como Usar

**1. Ajuste os parâmetros** no painel lateral:

* Tamanho da cidade
* Densidade urbana
* Curvatura das ruas
* Altura dos prédios


**2. Clique em "Gerar Nova Cidade"** para criar sua cidade

**3. Explore a cidade:**

* Use o mouse para navegar (arrastar)
* Botões + e - para zoom
* Ou use o scroll do mouse

**4. Personalize:**

* Escolha cores diferentes
* Teste com seeds específicas
* Ajuste até conseguir o resultado perfeito

**5. Exporte sua criação** como imagem HD

## 🧮 Algoritmos Implementados
### 🌊 Perlin Noise
Gera o terreno base e influencia a densidade de construções
```javascript// Exemplo simplificado
function perlinNoise(x, y) {
  // Implementação do algoritmo Perlin
  return noise.simplex2(x * 0.01, y * 0.01);
}
```
### 🛣️ Sistema Viário
Combina padrões radiais e de grid para criar ruas realistas

* Estradas principais seguem o terreno
* Ruas secundárias criam quarteirões
* Intersecções automáticas

### 🏘️ Distribuição de Prédios
Densidade baseada na distância do centro e tipo de zona

* Centro: prédios comerciais altos
* Periferia: casas residenciais
* Industrial: galpões e fábricas

## 🤝 Contribuindo
Contribuições são muito bem-vindas! Se você tem ideias para melhorar o Urbanis:

***1.*** Fork o projeto
<br>
***2.*** Crie sua feature branch ```(git checkout -b feature/AmazingFeature)```
<br>
***3.*** Commit suas mudanças ```(git commit -m 'Add some AmazingFeature')```
<br>
***4.*** Push para a branch ```(git push origin feature/AmazingFeature)```
<br>
***5.*** Abra um Pull Request

## 🐛 Reportando Bugs
Encontrou um bug? Abra uma [issue](https://github.com/AndrewGouvea/urbanis/issues) com:

* Descrição do problema
* Passos para reproduzir
* Screenshots (se aplicável)
* Informações do browser/sistema

## 📈 Estatísticas do Projeto

![GitHub Repo stars](https://img.shields.io/github/stars/AndrewGouvea/urbanis?style=plastic&labelColor=%23555555&color=%2397c900)

![Show Image](https://img.shields.io/github/forks/AndrewGouvea/urbanis?style=plastic&labelColor=%23555555&color=%2397c900)

![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/AndrewGouvea/urbanis?labelColor=%23555555&color=%2397c900)

![GitHub last commit](https://img.shields.io/github/last-commit/AndrewGouvea/urbanis?labelColor=%23555555&color=%2397c900)


## 📚 Inspirações e Referências

* [Procedural City Generation](https://github.com/topics/procedural-generation)
* [SimCity - Desenvolvimento urbano](https://www.ea.com/pt-br/games/simcity)
* [Cities: Skylines - Design urbano](https://www.paradoxinteractive.com/games/cities-skylines-ii/about)
* [Wave Function Collapse Algorithm](https://github.com/mxgmn/WaveFunctionCollapse)

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/AndrewGouvea/urbanis?tab=MIT-1-ov-file#readme) para mais detalhes.

## 👤 Autor
**Andrew Souza**

GitHub: [@AndrewGouvea](https://github.com/AndrewGouvea)<br>
LinkedIn: https://linkedin.com/in/andrew-gouvêa-551b052a6<br>
Email: andrewgouveasouza@gmail.com<br>
<br>

<div align="center">
⭐ Se este projeto te ajudou, deixe uma estrela!
Made with ❤️ and lots of ☕
</div>
