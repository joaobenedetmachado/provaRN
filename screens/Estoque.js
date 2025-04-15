import { View, Text, StyleSheet } from 'react-native';
import ProdCard from '../components/ProdCard';
export default function Estoque() {
    return (
        <View style={{ gap: 12 }}>
            <Text>Produtos Cadastrados:     </Text>
            <ProdCard
                imagereq={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Bqa0Sn8EMdWnovAoo1gOJIdl6pPCymXE-A&s"}
                title={"Bolo"}
                desc={"Bolo com açucar leite e fermento ideal para sua famlia"} />

            <ProdCard
                imagereq={"https://storage.googleapis.com/domain-images/f66c769e-19c6-405f-a833-47c240f8c256/products/gallery_b08efd28-4d1a-4f7e-a2a8-ae06b155aaa8.jpg"}
                title={"Cookie"}
                desc={"Cookie americano com gotas de chocolate"} />

            <ProdCard
                imagereq={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPg0FgowS1kzDgYZA4QvxXfNgXpFRMQD6CxA&s"}
                title={"Brigadeiro"}
                desc={"Brigadeiro ideal para festas"} />
            <ProdCard
                imagereq={"https://lirp.cdn-website.com/b1b2b34b/dms3rep/multi/opt/unnamed-640w.jpg"}
                title={"Torta de maça"}
                desc={"Torta de maça gostosa"} />
            <ProdCard
                imagereq={"https://static.itdg.com.br/images/1200-630/0093b901a326651004710993d43fe086/cappuccino.jpg"}
                title={"Capuccino"}
                desc={"Capuccino ideal para tomar em dias frios"} />





        </View>
    )
}

const style = StyleSheet.create({

})