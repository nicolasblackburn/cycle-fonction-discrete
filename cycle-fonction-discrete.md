#Existence de cycle dans une fonction discrète

## Nicolas Blackburn

## 2017/03/03


## Introduction

## Matrice d'adjacence

Soit une fonction $f:\mathbb{N} \to \mathbb{N}$. La matrice d'adjacence partielle de $f$ est une matrice carrée d'ordre $n$, définie comme étant

$$[\operatorname{Adj}_n f]_{i,j} = \left\{ \begin{aligned}
    1 & \text{ si } f(j) = i \ \text{ et } i \leq n \\
    0 & \text{ sinon.}
\end{aligned} \right. $$
    
## Propriétés de la matrice d'adjacence

Les coefficients d'une matrice d'adjacence sont tous $0$ ou $1$.

Chaque colonne d'une matrice d'adjacence ne contient au plus qu'un seul coefficient égal à $1$.

Posons $M_f = \operatorname{Adj}_n f$, $M_g = \operatorname{Adj}_n g$ et considérons $\vec e_i$ un vecteur dans $\mathbb{C}^n$, valant $1$ à la $i$-ième composante et $0$ pour toute autre composante. Alors

$$M_f \vec e_i = \vec e_{f(i)}$$

et 

$$M_f M_g = M_{f \circ g}.$$

## Cycle

Soit une fonction $f:X \to X$. On dit que $f$ a un cycle d'ordre $k$ s'il existe un élément $x \in X$ tel que $f^k(x) = x$, pour $k > 0$ et $k$ entier. L'ordre du cycle contenant $x$ est $k$ si et seulement si $k$ est le plus petit entier tel que $f^k(x) = x$. On définit $\mathcal{C} = (x_1 \  x_2 \ \ldots \  x_k)$ étant un cycle de $f$, $x_i \in X$ et $i \neq j$ implique $x_i \neq x_j$. Alors 

$$f(x_i) = \left\{ \begin{aligned}
    x_{i+1} & \text{ si } i < k \\
    x_1 & \text{ si } i = k \text{.}
\end{aligned} \right. $$

On a le cas particulier d'un cycle d'ordre $1$ qui est appelé un point fixe.

## Ensemble connexe

Un ensemble connexe $X'$ d'une fonction $f:X \to X$ est un sous-ensemble de $X$ tel que pour tout éléments $x_1 \in X'$, il existe un élément $x_2 \in X'$ tel que $f(x_1) = x_2$ ou $f(x_2) = x_1$.

## Polynôme caractéristique

Soit une fonction $f:X \to X$ sur un ensemble $X$ fini et $\mathcal{P}_f[\lambda]$, son polynôme caractéristique, alors 

$$\mathcal{P}_f[\lambda] = \lambda^{|Z|} \prod_{\mathcal{C}_i \in C} (\lambda^{|\mathcal{C}_i|} - 1)$$

où $Z$ est l'ensemble des éléments de $X$ qui ne sont pas élément d'un cycle de $f$ et $C$ est l'ensemble des cycles de $f$.

Preuve:

Pour tout élément $z \in Z$, il existe un entier $k > 0$ minimal tel que $f^k(z) \in Z$, sinon il y aurait contradiction avec le fait que les éléments de $Z$ ne sont pas élément d'un cycle.

Alors il existe au moins un élément $z \in Z$ tel que $f(z) \not \in Z$. Soit $Z_1$, l'ensemble des éléments de $Z$ tels que $f(z) \in Z$ si $z \in Z_1$ et $Z_2$, l'ensemble des éléments de $Z$ tels que $f(z) \not \in Z$ si $z \in Z_2$. 

Soit $Z = \{z_i\}$, $i$ allant de $1$ à $|Z|$ et l'application $g:Z \to \mathbb{N}$ définie telle que $g(z_i) = i$. L'application $g$ est bijective et $g \circ f \circ g^{-1}$ a le même polynôme caractéristique que $f$.

Comme $f$ appliqué sur tout élément $x \in \overline Z$ est un élément de $\overline Z$, alors on a que la matrice de $g \circ f \circ g^{-1}$ est une matrice bloc triangulaire 

$\left[ \begin{array}{cc}
    A & 0 \\
    B & C 
\end{array} \right]$

et donc que $\mathcal{P}_f(\lambda) = \mathcal{P}_A(\lambda)\mathcal{P}_B(\lambda)$.

Le polynôme caractéristique $\mathcal{P}_A(\lambda) = \lambda^{|Z|}$. En effet pour tout $x \leq |Z|$, soit $g^{-1}(x) \in Z_1$ et $g \circ f \circ g^{-1} (x) \geq |Z|$, ou $g^{-1}(x) \in Z_2$ et $g \circ f \circ g^{-1} (x) > |Z|$.

Cas où $g^{-1}(x) \in Z_2$:

La $x$-ième colonne de $A$ ne contient que des $0$, et donc $\operatorname{Det} (\lambda I - A) = \lambda^{|Z_2|}\operatorname{Det} (\lambda I - A')$, où $A'$ est la sous-matrice de $A$ où les $x$-ièmes colonnes et rangées de $A$ ont été supprimées, pour tout $x \in Z_2$.  

## Formule de comptage

On a 

$$|X| = |Z| + \sum_{\mathcal{C}_i \in C} |\mathcal{C}_i|.$$

## Existence de cycle

Si la fonction $f:\mathbb{N} \to \mathbb{N}$ a un cycle d'ordre $k$, alors il existe $M_n$, une matrice d'adjacence partielle de $f$ d'ordre $n$, telle que $(\lambda^k - 1)$ divise $\mathcal{P}_{M_n}[\lambda]$. 

Si $f$ n'a pas de cycle alors $\mathcal{P}_{M_n}[\lambda] = \lambda^n$ pour toute matrice $M_n$ d'adjacence partielle de $f$ d'ordre $n$.

## Conclusion
