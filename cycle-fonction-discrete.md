---
title: Étude des cycles d'une fonction
author: Nicolas Blackburn
---

# Introduction

Le sujet de cet article est l'étude des cycles d'une fonction définie sur un ensemble ![$X \subseteq \mathbb{N}$](./images/WCBcc3Vic2V0ZXEgXG1hdGhiYntOfQ__.svg). Pour ce faire nous allons introduire une correspondance entre la fonction $f:X \to X$ et une matrice qui lui est associée, $\operatorname{Adj} f$, nommée la matrice d'adjacence de $f$. Cette matrice a la particularité d'agir sur les vecteurs unitaires naturels $\vec e_i$ d'une manière isomorphe à la fonction $f$ sur son ensemble de définition. 

De plus, nous verrons que l'étude du polynôme caractéristique de la matrice d'adjacence nous permet aussi de caractériser les cycles de la fonction en donnant le nombres de cycles distincts et leur ordre.

# Notations et conventions

1. $f^0(x) = x$, pour tout $x$, autrement dit $f^0$ est la fonction identité
2. $f^1(x) = f(x)$, pour tout $n$ entier et $n \geq 1$
3. $f^n(x) = f^{n-1}(f(x))$, pour tout $n$ entier et $n \geq 1$
4. $(f \circ g) (x) = f(g(x))$, la composition de fonctions
5. $\mathbb{N}$ désigne l'ensemble des entiers plus grands ou égaux à $1$
6. $X$ désigne $\mathbb{N}$ ou un sous-ensemble de $\mathbb{N}$ tel que $1 \in X$ et si $x \in X$, alors $(x+1) \in X$ sauf si $x$ est le maximum de $X$

# Cycles

Soit une fonction $f:X \to X$. On dit que $f$ a un cycle d'ordre $k$ s'il existe un élément $x \in X$ tel que $f^k(x) = x$, pour $k > 0$ et $k$ entier. L'ordre du cycle contenant $x$ est $k$ si et seulement si $k$ est le plus petit entier tel que $f^k(x) = x$. On définit $\mathcal{C} = (x_1 \  x_2 \ \ldots \  x_k)$ étant un cycle de $f$, $x_i \in X$ et $i \neq j$ implique $x_i \neq x_j$. Alors 

$$f(x_i) = \left\{ \begin{aligned}
    x_{i+1} & \text{ si } i < k \\
    x_1 & \text{ si } i = k \text{.}
\end{aligned} \right. $$

On a le cas particulier d'un cycle d'ordre $1$ qui est appelé un point fixe.

# Matrices d'adjacence

Soit une fonction $f:X \to X$, où $X = \{x \in \mathbb{N}: 1 \leq x \leq n\}$. La matrice d'adjacence de $f$ est une matrice carrée d'ordre $n$, définie comme étant

$$[\operatorname{Adj} f]_{i,j} = \left\{ \begin{aligned}
    1 & \text{ si } f(j) = i \\
    0 & \text{ sinon.}
\end{aligned} \right. $$

On dit que cette matrice d'adjacence est totale.

On peut aussi parler de matrice d'adjacence partielle de $f$, pour un entier $m < n$ (et $m \geq 1$), qui est une matrice carrée d'ordre $m$, définie comme étant

$$[\operatorname{Adj}_m f]_{i,j} = \left\{ \begin{aligned}
    1 & \text{ si } f(j) = i \ \text{ et } i \leq m \\
    0 & \text{ sinon.}
\end{aligned} \right. $$

Dans les cas où la fonction $f$ est plutôt définie sur $\mathbb{N}$, alors on peut définir la matrice d'adjacence d'ordre $m$ de la même manière.

Parfois, la fonction $f$ elle-même peut être partielle, c'est-à-dire qu'elle n'est pas définie totalement sur son ensemble de définition $X$. Cela ne cause pas de problème.
    
# Propriétés de la matrice d'adjacence

1. Les coefficients d'une matrice d'adjacence sont tous $0$ ou $1$.

2. Chaque colonne d'une matrice d'adjacence ne contient au plus qu'un seul coefficient égal à $1$.

3. Prenons deux fonctions $f:X \to X$ et $g:X \to X$. Posons $M_f = \operatorname{Adj}_n f$, $M_g = \operatorname{Adj}_n g$ et considérons $\vec e_i$ un vecteur unitaire naturel dans $\mathbb{C}^n$, valant $1$ à la $i$-ième composante et $0$ pour toute autre composante. Alors

    $$M_f \vec e_i = \vec e_{f(i)}$$

    et 

    $$M_f M_g = M_{f \circ g}.$$

# Polynômes caractéristiques

Le polynôme caractéristique $\mathcal{P}_f[\lambda]$ d'une fonction $f$ est le polynôme caractéristique de sa matrice d'adjacence. Lorsque $f$ est définie sur $\mathbb{N}$, alors on considère une suite de fonctions partielles $(f_1, f_2, \dots, f_n)$ où le domaine de $f_i$ est un sous-ensemble du domaine de $f_j$, pour tout $i < j$ et dont la limite de la suite lorsque $n$ tend vers l'infini est $f$. Alors le polynôme caractéristique de $f$ est la limite de la suite des polynômes caractéristiques associés aux fonctions partielles de la suite. 

## Lemme 1

Soit une fonction $f:X \to X$ sur un ensemble $X$ fini. Supposons qu'il existe un élément $x_1 \in X$ tel que $f(x_i) \not = x_1$, pour tout $x_i \in X$. Alors 

$$\mathcal{P}_f[\lambda] = \lambda \mathcal{P}_g[\lambda]$$

où $g:B \to B$ est la restriction de $f$ au sous-ensemble $B$.

Preuve:

1. Soit $N = \{n \in \mathbb{N} | n \leq |X|\}$, il existe une bijection $h:X \to N$ telle que $h(x_i) = i$, pour tout élément $x_i \in X$. En particulier $h(x_1) = 1$.

2. On a que $\mathcal{P}_{h \circ f \circ h^{-1}}[\lambda] = \mathcal{P}_f[\lambda]$. Soit $M_f = \operatorname{Adj} f$ et $M_h = \operatorname{Adj} h$ alors $\operatorname{Det} (\lambda I - M_h M_f M_h^{-1}) = \operatorname{Det} (\lambda I - M_f)$.

3. Puisque pour tout élément $f(x_i) \not = x_1$ alors $h \circ f \circ h^{-1} (n) \not = 1$ pour tout $n \in N$. 

4. La $M$, matrice d'adjacence de $h \circ f \circ h^{-1}$ est une matrice dont la première ligne ne contient que des $0$ alors $\lambda I - M$ est une matrice bloc triangulaire inférieure

$$
\begin{bmatrix}
    [\lambda] & 0 \\
    A & B 
\end{bmatrix}
.$$

5. Alors $\mathcal{P}_{h \circ f \circ h^{-1}}[\lambda] = \lambda \operatorname{Det} B = \lambda \mathcal{P}_g[\lambda]$.

## Lemme 2

Soit $\mathcal C:X \to X$, un $n$-cycle de $X$, $n = |X|$, alors $\mathcal{P}_{\mathcal C}[\lambda] = (\lambda^n - 1)$.

Preuve:

1. ~~$\operatorname{Adj}_{\mathcal C}^n = I$~~
2. ~~$\lambda I - \operatorname{Adj}_{\mathcal C}^n = (\lambda - 1) I$~~

## Théorème 1

Soit une fonction $f:X \to X$ sur un ensemble $X$ fini et $\mathcal{P}_f[\lambda]$, son polynôme caractéristique, alors 

$$\mathcal{P}_f[\lambda] = \lambda^{|Z|} \prod_{\mathcal{C}_i \in C} (\lambda^{|\mathcal{C}_i|} - 1)$$

où $Z$ est l'ensemble des éléments de $X$ qui ne sont pas élément d'un cycle de $f$ et $C$ est l'ensemble des cycles de $f$.

Preuve:

Par induction sur l'ensemble $Z$ en utilisant le lemme 1 et ensuite sur $C$ en utilisant le lemme 2.

# Formule de comptage

Une petite formule qui ressemble au lemme de Burnside en théorie des groupes:

$$|X| = |Z| + \sum_{\mathcal{C}_i \in C} |\mathcal{C}_i|$$

Preuve:

...todo, pas vraiment besoin de ça, juste intéressant comme remarque...

# Existence de cycle

## Théorème 2

Si la fonction $f:\mathbb{N} \to \mathbb{N}$ a un cycle d'ordre $k$, alors il existe $M_n$, une matrice d'adjacence partielle de $f$ d'ordre $n$, telle que $(\lambda^k - 1)$ divise $\mathcal{P}_{M_n}[\lambda]$. 

Si $f$ n'a pas de cycle alors $\mathcal{P}_{M_n}[\lambda] = \lambda^n$ pour toute matrice $M_n$ d'adjacence partielle de $f$ d'ordre $n$.

Preuve:

Corrolaire du théorème 1
