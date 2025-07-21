import { TaskProps } from '@/types/type';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Task({ task, callback }: TaskProps) {
    return (
        <View style={styles.card}>
            <Text style={{
                color: '#C1BABA'
            }}>{task}</Text>
            <TouchableOpacity style={{
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius: 8,
                backgroundColor: '#DC3636',
            }}
                onPress={callback}
            >
                <Text style={{
                    color: '#fff'
                }}>X</Text>
            </TouchableOpacity>

        </View >
    )
};


const styles = StyleSheet.create({
    card: {
        height: 60,
        backgroundColor: '#242C3B',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#2d384dff',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    }
});