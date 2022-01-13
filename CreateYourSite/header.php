<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Сайт</title>
	<style type="text/css">
	*{
		margin: 0;
		padding: 0;
		font-family: "OpenSans", sans-serif;
	}
	a{
		color: #dcdcdc;
	}
		div{
			display: block;
		}
		.main-container{
		width: 100%;
		max-width: 1200px;
		padding-top: 0.1px;
		height: 100%;

		margin: 0 auto;
	}
	.textblock-container{
		width: 100%;
		max-width: 1200px;
		padding-top: 0.1px;
		height: 100%;
		margin:  0 auto;
	}
	.footer-container{
		width: 100%;
		max-width: 1200px;
		margin:  0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.main{
		min-height: 650px;

		background: linear-gradient(rgba(0,0,0,0.65) 90%, rgba(34,34,34,1)) 97%, url('background.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
		.subtitle{
			line-height: 100px;
			color: #fff;
			font-size: 30px;
			text-align: center;
		}
		.subtitle2{
			color: #f5f5f5;
			line-height: 40px;
			font-size: 25px;
		}
		.main__text{
			font-size: 20px;
			text-align: justify;

			color:  #ffffff;
		}
		.container{
			display: flex;
			justify-content: space-around;

			margin:  0 auto;
			width: 100%;
			max-width: 1200px;
			height: 100%;
		}
		header{
			width: 100%;
			height: 90px;

			background: #222222;
		}
		footer{
			width: 100%;
			height: 150px;

			background: #111111;
		}
		.footer__text{
			margin-top: 70px;
			font-size: 15px;
			color: #dcdcdc;
		}
		.header__logo{
			display: flex;
			justify-content: center;
			align-items: center;

			width: 300px;
			height: 100%;
		}
		.logo__img{
			display: block;
			width: 100%;

		}
		.header__menu{
			display: flex;
			justify-content: space-around;
			width: 650px;
			height: 100%;

		}
		.menu__link{
			display: flex;
			justify-content: center;
			align-items: center;

			width: 23%;
			margin: 0 1%;
			height: 100%;

			background: #444444;
			color: white;
			font-weight: bold;
			text-decoration: none;

		}
		.menu__link:hover{
			background: #333333;
			height: 84px;
			border-bottom:  6px solid #ff0000;
		}
		.title{
			margin: 250px 0 50px;
			font-size: 45px;
			text-align: center;

			color: #ffffff;
		}
		.main__text{
			font-size: 20px;
			text-align: justify;
		}
		.text{
			font-size: 18px;
			text-align: justify;
			color: #fff;
			line-height: 25px;
		}
		.textblock__img{
			width: 50%;
			float:  left;
			margin:  10px 10px 10px 0;
		}
		.texts{
			display: block;

			margin:  30px 0;

			font-size: 18px;
			line-height: 25px;
			text-align: justify;
			color: #333333;
			background: #dcdcdc;

		}
		.textblock{
			width: 100%;
			background: #222222;
		}
	</style>
</head>
<body>
	<header>
		<div class="container">
			<div class="header__logo">
				<img class="logo__img" src="logo.png">
			</div>
			<div class="header__menu">
				<a class="menu__link" href="index.php">Главная</a>
				<a class="menu__link" href="main.php">Создание сайта</a>
				<a class="menu__link" href="contacts.php">Контакты</a>
				<a class="menu__link" href="links.php">Ссылки</a>
			</div>
		</div>
	</header>
</body>
</html>