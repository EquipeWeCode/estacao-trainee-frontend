/// <reference types="vite-plugin-svgr/client" />

import { i18n } from "@/translations/i18n";
import { Button, Col, Dropdown, Image, Menu, Row, Space } from "antd";
import { useAuth } from "@/contexts/auth";
import { Link, useNavigate } from "react-router-dom";
import TraducaoBtn from "../TraducaoBtn";
import VagasBtn from "../VagasHeaderBtn/VagasBtn";

import { ReactComponent as Logo } from "@/assets/logo.svg";
import { capitalizaPriLetraDeCadaPalavra } from "@/utils/masks";
import { getToken, logout } from "@/services/autenticacao";

const Header = () => {
	const { user, setUser } = useAuth();
	const { t } = i18n;
	const navigate = useNavigate();

	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: "sair",
					onClick: () => {
						fazLogout();
					},
				},
			]}
		/>
	);

	const navegaLogin = () => {
		navigate("/estudante/login");
	};

	const fazLogout = () => {
		setUser({});
		logout();
	};

	return (
		<header>
			<Row className="header-itens" justify="space-between" align="middle">
				<Col className="logo">
					<Link to="/">
						<Logo width="100" height="35" />
					</Link>
				</Col>

				{user?.codEstudante ? (
					<Row gutter={12} align="middle">
						<Space>
							<Col className="translate-button">
								<TraducaoBtn />
							</Col>
							<Col className="welcome-text-header">
								{t("welcome")}: {capitalizaPriLetraDeCadaPalavra(user.nome)}
							</Col>
							<Col>
								<Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
									<Image
										className="user-image"
										src={user.avatar}
										alt={t("user")}
										width={35}
										preview={false}
									/>
								</Dropdown>
							</Col>
						</Space>
						<TraducaoBtn />
					</Row>
				) : (
					<>
						<Row gutter={12} align="middle">
							<Space>
								<Col>
									<VagasBtn />
								</Col>
								<Button onClick={navegaLogin}>Faça login</Button>
							</Space>
						</Row>
					</>
				)}
			</Row>
		</header>
	);
};

export default Header;
