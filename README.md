# Étude des cycles d'une fonction

par Nicolas Blackburn

## Introduction

Le sujet de cet article est l'étude des cycles d'une fonction définie sur un ensemble *X &sube; &naturals;*. Pour ce faire nous allons introduire une correspondance entre la fonction *f : X &rightarrow; X* et une matrice qui lui est associée, *Adj f*, nommée la matrice d'adjacence de *f*. Cette matrice a la particularité d'agir sur les vecteurs unitaires naturels *e<sup>&rightarrow;</sup><sub>i</sub>*d'une manière isomorphe à la fonction *f* sur son ensemble de définition. 

De plus, nous verrons que l'étude du polynôme caractéristique de la matrice d'adjacence nous permet aussi de caractériser les cycles de la fonction en donnant le nombres de cycles distincts et leur ordre.

## Notations et conventions

1. *f&hairsp;&hairsp;<sup>0</sup>(x) = x*,  pour tout *x*, autrement dit *f&hairsp;&hairsp;<sup>0</sup>* est la fonction identité
2. *f&hairsp;&hairsp;<sup>1</sup>(x) = f(x)*, pour tout *n* entier et *n &geq; 1*
3. *f&hairsp;&hairsp;<sup>n</sup>(x) = f&hairsp;&hairsp;<sup>n - 1</sup>(f(x))*, pour tout *n* entier et *n &geq; 1*
4. *(f &compfn; g)(x) = f(g(x))*, la composition de fonctions
5. *&naturals;* désigne l'ensemble des entiers plus grands ou égaux à *1*
6. *X* désigne *&naturals;* ou un sous-ensemble de *&naturals;* tel que *1 &isin; X* et si *x &isin; X*, alors *x + 1 &isin; X* sauf si *x* est le maximum de *X*

## Cycles

Soit une fonction *f : X &rightarrow; X*. On dit que *f* a un cycle d'ordre *k* s'il existe un élément *x &isin; X* tel que *f&hairsp;&hairsp;<sup>k</sup>(x) = x*, pour *k &gt; 0* et *k* entier. L'ordre du cycle contenant *x* est *k* si et seulement si *k* est le plus petit entier tel que *f&hairsp;&hairsp;<sup>k</sup>(x) = x*. On définit *C = (x<sub>1</sub> x<sub>2</sub> &ctdot; x<sub>k</sub>)* étant un cycle de *f*, *x<sub>i</sub> &isin; X* et *i &ne; j* implique *x<sub>i</sub> &ne; x<sub>j</sub>*. Alors 

> *f(x<sub>i</sub>) =*<br>
> &emsp;&emsp;&emsp; *x<sub>1</sub>*, si *i = k;*<br>
> &emsp;&emsp;&emsp; *x<sub>i + 1</sub>*, si *i &lt; k*.

On a le cas particulier d'un cycle d'ordre *1* qui est appelé un point fixe.

## Matrices d'adjacence

Soit une fonction *f : X &rightarrow; X*, où *X = {x &isin; &naturals;: 1 &leq; x &leq; n}*. La matrice d'adjacence de *f* est une matrice carrée d'ordre *n*, définie comme étant

> [Adj f]<sub><em>i, j</em></sub> =<br>
> &emsp;&emsp;&emsp; <em>1</em>, si <em>f(j) = i</em>;<br>
> &emsp;&emsp;&emsp; <em>0</em>, sinon.

On dit que cette matrice d'adjacence est totale.

On peut aussi parler de matrice d'adjacence partielle de *f*, pour un entier *m &lt; n* (et *m &geq; 1*), qui est une matrice carrée d'ordre *m*, définie comme étant


<dl>
    <dt><em>[Adj f]<sub>i, j</sub> = </em></dt>
    <dd><em>1</em>, si <em>f(j) = i</em> et <em>i &geq; m</em>;<dd>
    <dd><em>0</em>, sinon.<dd>
</dl>

Dans les cas où la fonction *f* est plutôt définie sur *&naturals;*, alors on peut définir la matrice d'adjacence d'ordre *m* de la même manière.

Parfois, la fonction *f* elle-même peut être partielle, c'est-à-dire qu'elle n'est pas définie totalement sur son ensemble de définition *X*. Cela ne cause pas de problème.
    
## Propriétés de la matrice d'adjacence

1. Les coefficients d'une matrice d'adjacence sont tous *0* ou *1*.

2. Chaque colonne d'une matrice d'adjacence ne contient au plus qu'un seul coefficient égal à *1*.

3. Prenons deux fonctions *f : X &rightarrow; X* et *g : X &rightarrow; X*. Posons *M<sub>f</sub> = Adj<sub>n</sub> f*, *M<sub>g</sub> = Adj<sub>n</sub> g* et considérons *e<sup>&rightarrow;</sup><sub>i</sub>* un vecteur unitaire naturel dans *&reals;<sup>n</sup>*, valant *1* à la *i*-ième composante et *0* pour toute autre composante. Alors

    *M<sub>f</sub> e<sup>&rightarrow;</sup><sub>i</sub> = e<sup>&rightarrow;</sup><sub>f(i)</sub>*

    et 

    *M<sub>f</sub> M<sub>g</sub> = M<sub>f &compfn; g</sub>*.

## Polynômes caractéristiques

Le polynôme caractéristique $\mathcal{P}_f[\lambda]$ d'une fonction *f* est le polynôme caractéristique de sa matrice d'adjacence. Lorsque *f* est définie sur *&naturals;*, alors on considère une suite de fonctions partielles $(f_1, f_2, \dots, f_n)$ où le domaine de $f_i$ est un sous-ensemble du domaine de $f_j$, pour tout *i &lt; j* et dont la limite de la suite lorsque *n* tend vers l'infini est *f*. Alors le polynôme caractéristique de *f* est la limite de la suite des polynômes caractéristiques associés aux fonctions partielles de la suite. 

### Lemme 1

Soit une fonction *f : X &rightarrow; X* sur un ensemble *X* fini. Supposons qu'il existe un élément $x_1 \in X$ tel que $f(x<sub>i</sub>) \not = x<sub>1</sub>$, pour tout *x<sub>i</sub> &isin; X*. Alors 

$$\mathcal{P}_f[\lambda] = \lambda \mathcal{P}_g[\lambda]$$

où $g:B \to B$ est la restriction de *f* au sous-ensemble *B*.

Preuve:

1. Soit $N = \{n \in \mathbb{N} | n \leq |X|\}$, il existe une bijection $h:X \to N$ telle que $h(x_i) = i$, pour tout élément *x<sub>i</sub> &isin; X*. En particulier $h(x_1) = 1$.

2. On a que $\mathcal{P}_{h \circ f \circ h^{-1}}[\lambda] = \mathcal{P}_f[\lambda]$. Soit $M_f = \operatorname{Adj} f$ et $M_h = \operatorname{Adj} h$ alors $\operatorname{Det} (\lambda I - M_h M_f M_h^{-1}) = \operatorname{Det} (\lambda I - M_f)$.

3. Puisque pour tout élément $f(x_i) \not = x_1$ alors $h \circ f \circ h^{-1} (n) \not = 1$ pour tout $n \in N$. 

4. La *M*, matrice d'adjacence de $h \circ f \circ h^{-1}$ est une matrice dont la première ligne ne contient que des *0* alors $\lambda I - M$ est une matrice bloc triangulaire inférieure

$$
\begin{bmatrix}
    [\lambda] & 0 \\
    A & B 
\end{bmatrix}
.$$

5. Alors $\mathcal{P}_{h \circ f \circ h^{-1}}[\lambda] = \lambda \operatorname{Det} B = \lambda \mathcal{P}_g[\lambda]$.

### Lemme 2

Soit $\mathcal C:X \to X$, un *n*-cycle de *X*, $n = |X|$, alors $\mathcal{P}_{\mathcal C}[\lambda] = (\lambda^n - 1)$.

Preuve:

1. ~~$\operatorname{Adj}_{\mathcal C}^n = I$~~
2. ~~$\lambda I - \operatorname{Adj}_{\mathcal C}^n = (\lambda - 1) I$~~

### Théorème 1

Soit une fonction *f : X &rightarrow; X* sur un ensemble *X* fini et $\mathcal{P}_f[\lambda]$, son polynôme caractéristique, alors 

$$\mathcal{P}_f[\lambda] = \lambda^{|Z|} \prod_{\mathcal{C}_i \in C} (\lambda^{|\mathcal{C}_i|} - 1)$$

où *Z* est l'ensemble des éléments de *X* qui ne sont pas élément d'un cycle de *f* et *C* est l'ensemble des cycles de *f*.

Preuve:

Par induction sur l'ensemble *Z* en utilisant le lemme 1 et ensuite sur *C* en utilisant le lemme 2.

## Formule de comptage

Une petite formule qui ressemble au lemme de Burnside en théorie des groupes:

$$|X| = |Z| + \sum_{\mathcal{C}_i \in C} |\mathcal{C}_i|$$

Preuve:

...todo, pas vraiment besoin de ça, juste intéressant comme remarque...

## Existence de cycle

### Théorème 2

Si la fonction $f:\mathbb{N} \to \mathbb{N}$ a un cycle d'ordre *k*, alors il existe $M_n$, une matrice d'adjacence partielle de *f* d'ordre *n*, telle que $(\lambda^k - 1)$ divise $\mathcal{P}_{M_n}[\lambda]$. 

Si *f* n'a pas de cycle alors $\mathcal{P}_{M_n}[\lambda] = \lambda^n$ pour toute matrice $M_n$ d'adjacence partielle de *f* d'ordre *n*.

Preuve:

Corrolaire du théorème 1
