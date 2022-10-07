import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { ReactComponent as Logo } from "@/assets/notfound.svg";
import Card from "@/components/common/Card";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import styles from "./styles.module.css";
import ButtonVoltar from "@/components/common/ButtonVoltar";

const NotFound = () => {
	const { t } = useTranslation();

	return (
		<>
				<Row className={styles.containerNotfound} justify="center">
					<Col className={styles.notfound}>
						<Logo width="150" height="150" />
						<h1>{t("not_found")}</h1>
						<ButtonVoltar secondary />
					</Col>
				</Row>
		</>
	);
};

export default NotFound;
