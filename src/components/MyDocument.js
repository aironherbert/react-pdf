import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Link, Font} from '@react-pdf/renderer';
import img from '../img/img.jpg'

const txt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor suscipit ipsum ac dictum. Suspendisse potenti. Nulla scelerisque eget eros et sagittis. Morbi a dolor aliquam, cursus lacus ac, cursus ligula. Nunc in auctor nunc. Nunc at risus id mauris gravida tristique vitae quis arcu. Aliquam erat volutpat. Suspendisse id sollicitudin quam.

Aenean in elit ex. In hac habitasse platea dictumst. Vivamus hendrerit, nunc sit amet viverra interdum, massa dolor hendrerit nisi, ut vestibulum quam libero vel nibh. Morbi nisi nulla, dictum eget ligula id, malesuada maximus enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus in est venenatis, laoreet odio non, sollicitudin odio. Morbi libero lorem, lobortis non commodo sit amet, tristique et magna. Donec pretium nibh magna, venenatis sagittis nunc fringilla quis. Aenean ullamcorper consectetur tellus. In interdum, eros vel ullamcorper pretium, quam purus aliquam leo, eget aliquam nulla sapien eget mauris. Phasellus posuere, nunc nec vulputate sollicitudin, lectus eros varius neque, ultrices sodales lorem nunc eget augue.

Sed eu nisl rhoncus, pretium magna at, ultrices felis. Nam ut bibendum metus. Aenean vitae bibendum purus, eget interdum augue. In congue augue sit amet lorem interdum, interdum tincidunt nulla iaculis. Vivamus fermentum elit vel lorem mattis, a fermentum arcu cursus. Duis feugiat, sem ac consequat ultrices, dui lacus egestas risus, vel vestibulum enim eros non enim. Donec ut fringilla odio. Integer fringilla metus sem, et efficitur mauris ullamcorper a. Vivamus luctus eu nisi et viverra. Sed gravida eros vel aliquet tempor. Praesent id lacus et risus pulvinar semper in porta dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Vestibulum rutrum fermentum ex, vel laoreet turpis ullamcorper euismod. Mauris vitae congue est. Praesent elementum sapien nec tincidunt eleifend. Aliquam fringilla porta est. Praesent dignissim nisi vel urna feugiat feugiat. Proin congue, ante in euismod tempus, justo dui tincidunt massa, vel lobortis nisi enim et ante. Integer sed nisl volutpat, feugiat nulla vel, blandit nulla. Sed condimentum, neque vitae gravida mattis, sapien sem interdum nisi, ac lobortis tellus metus sit amet augue.

Quisque sed sollicitudin est, a pulvinar est. Nunc suscipit porttitor urna, iaculis vulputate eros pellentesque vitae. Morbi sodales dolor facilisis arcu efficitur consectetur. Vivamus gravida congue justo, non vulputate elit feugiat a. Proin efficitur enim lectus. Quisque ut orci ut libero luctus dignissim. Cras interdum lacinia rhoncus.`

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        padding: 20
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        margin: 20,
    },
    text: {
        fontSize: 12,
        textAlign: 'justify',
        textIndent: 0,
    },
    br: {
        lineHeight: 2
    },
    img: {
        marginBottom: '10px'
    },
    link: {
        textDecoration: 'underline',
        color: 'blue'
    },
});

const MyDocument = () => (
    <Document title="React-PDF">
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Section #1</Text>
                <Text style={[styles.text, styles.br]}>Exemplo de um link: <Link src="https://www.google.com/" style={styles.link}>Google</Link></Text>
                <Text style={styles.text}>{txt}</Text>
                <Text style={styles.text}>{txt}</Text>
                <Text style={styles.title}>Section #2</Text>
                <Image src={ img } style={styles.img }></Image>
                <Text style={styles.text}>{txt}</Text>
                <Text style={styles.text}>{txt}</Text>
            </View>
        </Page>
    </Document>
);

export default MyDocument;