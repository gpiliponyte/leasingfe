import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leasing-form',
  templateUrl: './leasing-form.component.html',
  styleUrls: ['./leasing-form.component.css']
})
export class LeasingFormComponent implements OnInit {

  makesAndModels = {
    'choices': [{'groupValue': 'KIA', 'text': 'Besta', 'value': 'Besta'}, {
      'groupValue': 'LADA',
      'text': '110',
      'value': '110'
    }, {'groupValue': 'LAND ROVER', 'text': 'Defender', 'value': 'Defender'}, {
      'groupValue': 'LINCOLN',
      'text': 'Aviator',
      'value': 'Aviator'
    }, {'groupValue': 'MAZDA', 'text': '2', 'value': '2'}, {
      'groupValue': 'MITSUBISHI',
      'text': '3000GT',
      'value': '3000GT'
    }, {'groupValue': 'NISSAN', 'text': '200SX', 'value': '200SX'}, {
      'groupValue': 'ACURA',
      'text': 'SLX',
      'value': 'SLX'
    }, {'groupValue': 'ALFA ROMEO', 'text': '145', 'value': '145'}, {
      'groupValue': 'AUDI',
      'text': '100',
      'value': '100'
    }, {'groupValue': 'BMW', 'text': '116', 'value': '116'}, {
      'groupValue': 'BUICK',
      'text': 'Riviera',
      'value': 'Riviera'
    }, {'groupValue': 'CHEVROLET', 'text': 'Alero', 'value': 'Alero'}, {
      'groupValue': 'CHRYSLER',
      'text': '300C',
      'value': '300C'
    }, {'groupValue': 'CITROEN', 'text': 'AX14', 'value': 'AX14'}, {
      'groupValue': 'CORVETTE',
      'text': 'C6',
      'value': 'C6'
    }, {'groupValue': 'DAEWOO', 'text': 'Damas', 'value': 'Damas'}, {
      'groupValue': 'DAIHATSU',
      'text': 'Feroza',
      'value': 'Feroza'
    }, {'groupValue': 'GAZ', 'text': '2310', 'value': '2310'}, {
      'groupValue': 'GMC',
      'text': 'Yukon Denali',
      'value': 'Yukon Denali'
    }, {'groupValue': 'HONDA', 'text': 'Accord', 'value': 'Accord'}, {
      'groupValue': 'HUMMER',
      'text': 'H1',
      'value': 'H1'
    }, {'groupValue': 'INFINITI', 'text': 'FX35', 'value': 'FX35'}, {
      'groupValue': 'ISUZU',
      'text': 'D-Max',
      'value': 'D-Max'
    }, {'groupValue': 'SMART', 'text': 'City Coupe', 'value': 'City Coupe'}, {
      'groupValue': 'SSANGYONG',
      'text': 'Actyon',
      'value': 'Actyon'
    }, {'groupValue': 'SUBARU', 'text': 'Forester', 'value': 'Forester'}, {
      'groupValue': 'SUZUKI',
      'text': 'Alto',
      'value': 'Alto'
    }, {'groupValue': 'PEUGEOT', 'text': '1007', 'value': '1007'}, {
      'groupValue': 'PLYMOUTH',
      'text': 'Voyager',
      'value': 'Voyager'
    }, {'groupValue': 'PONTIAC', 'text': 'Firebird', 'value': 'Firebird'}, {
      'groupValue': 'PONTIAC',
      'text': 'Trans Sport',
      'value': 'Trans Sport'
    }, {'groupValue': 'PORSCHE', 'text': '911', 'value': '911'}, {
      'groupValue': 'PROTON',
      'text': '418',
      'value': '418'
    }, {'groupValue': 'RENAULT', 'text': 'Avantime', 'value': 'Avantime'}, {
      'groupValue': 'ROVER',
      'text': '45',
      'value': '45'
    }, {'groupValue': 'SAAB', 'text': '9*3', 'value': '9*3'}, {
      'groupValue': 'SEAT',
      'text': 'Alhambra',
      'value': 'Alhambra'
    }, {'groupValue': 'TOYOTA', 'text': '4-Runner', 'value': '4-Runner'}, {
      'groupValue': 'VIS',
      'text': '23461',
      'value': '23461'
    }, {'groupValue': 'VOLVO', 'text': '460', 'value': '460'}, {
      'groupValue': 'DODGE',
      'text': 'Avenger',
      'value': 'Avenger'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Amarok', 'value': 'Amarok'}, {
      'groupValue': 'MITSUBISHI',
      'text': 'ASX',
      'value': 'ASX'
    }, {'groupValue': 'FIAT', 'text': '500', 'value': '500'}, {
      'groupValue': 'FORD',
      'text': 'B-MAX',
      'value': 'B-MAX'
    }, {'groupValue': 'JEEP', 'text': 'COMPASS', 'value': 'COMPASS'}, {
      'groupValue': 'SKODA',
      'text': 'Citigo',
      'value': 'Citigo'
    }, {'groupValue': 'CADILLAC', 'text': 'ATS', 'value': 'ATS'}, {
      'groupValue': 'OPEL',
      'text': 'Adam',
      'value': 'Adam'
    }, {'groupValue': 'JAGUAR', 'text': 'F-type', 'value': 'F-type'}, {
      'groupValue': 'DACIA',
      'text': 'Dokker',
      'value': 'Dokker'
    }, {'groupValue': 'MINI', 'text': 'Clubman Cooper', 'value': 'Clubman Cooper'}, {
      'groupValue': 'MERCEDES-BENZ',
      'text': 'AMG GT',
      'value': 'AMG GT'
    }, {'groupValue': 'LEXUS', 'text': '200h', 'value': '200h'}, {
      'groupValue': 'JEEP',
      'text': 'Cherokee',
      'value': 'Cherokee'
    }, {'groupValue': 'KIA', 'text': 'Carens', 'value': 'Carens'}, {
      'groupValue': 'LADA',
      'text': '111',
      'value': '111'
    }, {'groupValue': 'LAND ROVER', 'text': 'Discovery', 'value': 'Discovery'}, {
      'groupValue': 'LINCOLN',
      'text': 'Continental',
      'value': 'Continental'
    }, {'groupValue': 'MAZDA', 'text': '3', 'value': '3'}, {
      'groupValue': 'MINI',
      'text': 'Cooper',
      'value': 'Cooper'
    }, {'groupValue': 'MITSUBISHI', 'text': 'Canter', 'value': 'Canter'}, {
      'groupValue': 'NISSAN',
      'text': '350Z',
      'value': '350Z'
    }, {'groupValue': 'ALFA ROMEO', 'text': '147', 'value': '147'}, {
      'groupValue': 'AUDI',
      'text': '100 Quattro',
      'value': '100 Quattro'
    }, {'groupValue': 'CADILLAC', 'text': 'BLS', 'value': 'BLS'}, {
      'groupValue': 'CHEVROLET',
      'text': 'Astro',
      'value': 'Astro'
    }, {'groupValue': 'CHRYSLER', 'text': '300M', 'value': '300M'}, {
      'groupValue': 'BMW',
      'text': '118',
      'value': '118'
    }, {'groupValue': 'CITROEN', 'text': 'Berlingo', 'value': 'Berlingo'}, {
      'groupValue': 'DAEWOO',
      'text': 'Kalos',
      'value': 'Kalos'
    }, {'groupValue': 'DODGE', 'text': 'Caliber', 'value': 'Caliber'}, {
      'groupValue': 'HONDA',
      'text': 'Civic',
      'value': 'Civic'
    }, {'groupValue': 'HUMMER', 'text': 'H2', 'value': 'H2'}, {
      'groupValue': 'JAGUAR',
      'text': 'S-Type',
      'value': 'S-Type'
    }, {'groupValue': 'SKODA', 'text': 'Fabia', 'value': 'Fabia'}, {
      'groupValue': 'SMART',
      'text': 'Forfour',
      'value': 'Forfour'
    }, {'groupValue': 'SUBARU', 'text': 'Impreza', 'value': 'Impreza'}, {
      'groupValue': 'SUZUKI',
      'text': 'Baleno',
      'value': 'Baleno'
    }, {'groupValue': 'PEUGEOT', 'text': '106', 'value': '106'}, {
      'groupValue': 'PORSCHE',
      'text': '944',
      'value': '944'
    }, {'groupValue': 'ROVER', 'text': '75', 'value': '75'}, {'groupValue': 'SAAB', 'text': '9*5', 'value': '9*5'}, {
      'groupValue': 'SEAT',
      'text': 'Altea',
      'value': 'Altea'
    }, {'groupValue': 'VOLVO', 'text': '480', 'value': '480'}, {
      'groupValue': 'TOYOTA',
      'text': 'Auris',
      'value': 'Auris'
    }, {'groupValue': 'DACIA', 'text': 'Duster', 'value': 'Duster'}, {
      'groupValue': 'FORD',
      'text': 'C-Max',
      'value': 'C-Max'
    }, {'groupValue': 'OPEL', 'text': 'Ampera', 'value': 'Ampera'}, {
      'groupValue': 'RENAULT',
      'text': 'Captur',
      'value': 'Captur'
    }, {'groupValue': 'FIAT', 'text': '500 XL', 'value': '500 XL'}, {
      'groupValue': 'LEXUS',
      'text': '350',
      'value': '350'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Arteon', 'value': 'Arteon'}, {
      'groupValue': 'MERCEDES-BENZ',
      'text': 'C 400',
      'value': 'C 400'
    }, {'groupValue': 'JEEP', 'text': 'Commander', 'value': 'Commander'}, {
      'groupValue': 'KIA',
      'text': 'Carnival',
      'value': 'Carnival'
    }, {'groupValue': 'LADA', 'text': '112', 'value': '112'}, {
      'groupValue': 'LAND ROVER',
      'text': 'Freelander',
      'value': 'Freelander'
    }, {'groupValue': 'LEXUS', 'text': 'GS300', 'value': 'GS300'}, {
      'groupValue': 'LINCOLN',
      'text': 'Navigator',
      'value': 'Navigator'
    }, {'groupValue': 'MAZDA', 'text': '323', 'value': '323'}, {
      'groupValue': 'MINI',
      'text': 'Cooper S',
      'value': 'Cooper S'
    }, {'groupValue': 'MITSUBISHI', 'text': 'Carisma', 'value': 'Carisma'}, {
      'groupValue': 'ALFA ROMEO',
      'text': '156',
      'value': '156'
    }, {'groupValue': 'AUDI', 'text': '200', 'value': '200'}, {
      'groupValue': 'CADILLAC',
      'text': 'CTS',
      'value': 'CTS'
    }, {'groupValue': 'CHEVROLET', 'text': 'Avalanche', 'value': 'Avalanche'}, {
      'groupValue': 'CHRYSLER',
      'text': 'Cirrus',
      'value': 'Cirrus'
    }, {'groupValue': 'DAEWOO', 'text': 'Korando', 'value': 'Korando'}, {
      'groupValue': 'DODGE',
      'text': 'Caravan',
      'value': 'Caravan'
    }, {'groupValue': 'HUMMER', 'text': 'H3', 'value': 'H3'}, {
      'groupValue': 'IVECO',
      'text': 'Daily',
      'value': 'Daily'
    }, {'groupValue': 'JAGUAR', 'text': 'Sovereign', 'value': 'Sovereign'}, {
      'groupValue': 'SEAT',
      'text': 'Arosa',
      'value': 'Arosa'
    }, {'groupValue': 'SKODA', 'text': 'Felicia', 'value': 'Felicia'}, {
      'groupValue': 'SMART',
      'text': 'Roadster',
      'value': 'Roadster'
    }, {'groupValue': 'SSANGYONG', 'text': 'Kyron', 'value': 'Kyron'}, {
      'groupValue': 'SUBARU',
      'text': 'Legacy',
      'value': 'Legacy'
    }, {'groupValue': 'SUZUKI', 'text': 'Carry', 'value': 'Carry'}, {
      'groupValue': 'PEUGEOT',
      'text': '107',
      'value': '107'
    }, {'groupValue': 'PORSCHE', 'text': '996', 'value': '996'}, {
      'groupValue': 'RENAULT',
      'text': 'Clio',
      'value': 'Clio'
    }, {'groupValue': 'ROVER', 'text': '200', 'value': '200'}, {
      'groupValue': 'SAAB',
      'text': '9*7',
      'value': '9*7'
    }, {'groupValue': 'TOYOTA', 'text': 'Avensis', 'value': 'Avensis'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Beetle',
      'value': 'Beetle'
    }, {'groupValue': 'VOLVO', 'text': '850', 'value': '850'}, {
      'groupValue': 'OPEL',
      'text': 'Antara',
      'value': 'Antara'
    }, {'groupValue': 'FIAT', 'text': 'Albea', 'value': 'Albea'}, {
      'groupValue': 'BMW',
      'text': '120',
      'value': '120'
    }, {'groupValue': 'FORD', 'text': 'Connect', 'value': 'Connect'}, {
      'groupValue': 'NISSAN',
      'text': '370Z',
      'value': '370Z'
    }, {'groupValue': 'CITROEN', 'text': 'C-Elysee', 'value': 'C-Elysee'}, {
      'groupValue': 'DACIA',
      'text': 'Lodgy',
      'value': 'Lodgy'
    }, {'groupValue': 'MERCEDES-BENZ', 'text': 'Coupe', 'value': 'Coupe'}, {
      'groupValue': 'JAGUAR',
      'text': 'X-Type',
      'value': 'X-Type'
    }, {'groupValue': 'JEEP', 'text': 'Grand Cherokee', 'value': 'Grand Cherokee'}, {
      'groupValue': 'LANCIA',
      'text': 'Lybra',
      'value': 'Lybra'
    }, {'groupValue': 'LAND ROVER', 'text': 'Range Rover', 'value': 'Range Rover'}, {
      'groupValue': 'LEXUS',
      'text': 'GS430',
      'value': 'GS430'
    }, {'groupValue': 'LINCOLN', 'text': 'Towncar', 'value': 'Towncar'}, {
      'groupValue': 'MAZDA',
      'text': '5',
      'value': '5'
    }, {'groupValue': 'MITSUBISHI', 'text': 'Colt', 'value': 'Colt'}, {
      'groupValue': 'NISSAN',
      'text': 'Almera',
      'value': 'Almera'
    }, {'groupValue': 'OPEL', 'text': 'Astra', 'value': 'Astra'}, {
      'groupValue': 'ALFA ROMEO',
      'text': '159',
      'value': '159'
    }, {'groupValue': 'AUDI', 'text': '80', 'value': '80'}, {
      'groupValue': 'CADILLAC',
      'text': 'De Ville',
      'value': 'De Ville'
    }, {'groupValue': 'CHEVROLET', 'text': 'Aveo', 'value': 'Aveo'}, {
      'groupValue': 'CHRYSLER',
      'text': 'Concorde',
      'value': 'Concorde'
    }, {'groupValue': 'DACIA', 'text': 'Logan', 'value': 'Logan'}, {
      'groupValue': 'DAEWOO',
      'text': 'Labo',
      'value': 'Labo'
    }, {'groupValue': 'DODGE', 'text': 'Durango', 'value': 'Durango'}, {
      'groupValue': 'FIAT',
      'text': 'Brava',
      'value': 'Brava'
    }, {'groupValue': 'FORD', 'text': 'Cougar', 'value': 'Cougar'}, {
      'groupValue': 'GAZ',
      'text': '3302',
      'value': '3302'
    }, {'groupValue': 'HONDA', 'text': 'CRV', 'value': 'CRV'}, {
      'groupValue': 'INFINITI',
      'text': 'QX4',
      'value': 'QX4'
    }, {'groupValue': 'SEAT', 'text': 'Ateca', 'value': 'Ateca'}, {
      'groupValue': 'SSANGYONG',
      'text': 'Musso',
      'value': 'Musso'
    }, {'groupValue': 'PORSCHE', 'text': 'Boxter', 'value': 'Boxter'}, {
      'groupValue': 'RENAULT',
      'text': 'Espace',
      'value': 'Espace'
    }, {'groupValue': 'ROVER', 'text': '214', 'value': '214'}, {
      'groupValue': 'SAAB',
      'text': '900',
      'value': '900'
    }, {'groupValue': 'SUZUKI', 'text': 'Grand Vitara', 'value': 'Grand Vitara'}, {
      'groupValue': 'TOYOTA',
      'text': 'Avensis Verso',
      'value': 'Avensis Verso'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Bora', 'value': 'Bora'}, {
      'groupValue': 'VOLVO',
      'text': '940',
      'value': '940'
    }, {'groupValue': 'KIA', 'text': 'Ceed', 'value': 'Ceed'}, {
      'groupValue': 'SMART',
      'text': 'Fortwo',
      'value': 'Fortwo'
    }, {'groupValue': 'BMW', 'text': '123', 'value': '123'}, {
      'groupValue': 'CITROEN',
      'text': 'C-Zero',
      'value': 'C-Zero'
    }, {'groupValue': 'MINI', 'text': 'Crossover', 'value': 'Crossover'}, {
      'groupValue': 'PEUGEOT',
      'text': '108',
      'value': '108'
    }, {'groupValue': 'SUBARU', 'text': 'Levorg', 'value': 'Levorg'}, {
      'groupValue': 'SKODA',
      'text': 'Karoq',
      'value': 'Karoq'
    }, {'groupValue': 'MERCEDES-BENZ', 'text': 'X-Class', 'value': 'X-Class'}, {
      'groupValue': 'JAGUAR',
      'text': 'XJ',
      'value': 'XJ'
    }, {'groupValue': 'KIA', 'text': 'Cerato', 'value': 'Cerato'}, {
      'groupValue': 'LADA',
      'text': 'Samara 21083',
      'value': 'Samara 21083'
    }, {'groupValue': 'LAND ROVER', 'text': 'Range Rover Sport', 'value': 'Range Rover Sport'}, {
      'groupValue': 'MAZDA',
      'text': '6',
      'value': '6'
    }, {'groupValue': 'MINI', 'text': 'One', 'value': 'One'}, {
      'groupValue': 'MITSUBISHI',
      'text': 'Eclipse',
      'value': 'Eclipse'
    }, {'groupValue': 'NISSAN', 'text': 'Almera Tino', 'value': 'Almera Tino'}, {
      'groupValue': 'OPEL',
      'text': 'Calibra',
      'value': 'Calibra'
    }, {'groupValue': 'ALFA ROMEO', 'text': '164', 'value': '164'}, {
      'groupValue': 'AUDI',
      'text': '80 Quattro',
      'value': '80 Quattro'
    }, {'groupValue': 'CADILLAC', 'text': 'Eldorado', 'value': 'Eldorado'}, {
      'groupValue': 'CHEVROLET',
      'text': 'Beretta',
      'value': 'Beretta'
    }, {'groupValue': 'CHRYSLER', 'text': 'Crossfire', 'value': 'Crossfire'}, {
      'groupValue': 'CITROEN',
      'text': 'C1',
      'value': 'C1'
    }, {'groupValue': 'DAEWOO', 'text': 'Lanos', 'value': 'Lanos'}, {
      'groupValue': 'DODGE',
      'text': 'Grand Caravan',
      'value': 'Grand Caravan'
    }, {'groupValue': 'FIAT', 'text': 'Bravo', 'value': 'Bravo'}, {
      'groupValue': 'FORD',
      'text': 'Courier',
      'value': 'Courier'
    }, {'groupValue': 'SEAT', 'text': 'Cordoba', 'value': 'Cordoba'}, {
      'groupValue': 'SSANGYONG',
      'text': 'Rexton',
      'value': 'Rexton'
    }, {'groupValue': 'SUBARU', 'text': 'Outback', 'value': 'Outback'}, {
      'groupValue': 'PORSCHE',
      'text': 'Cayenne',
      'value': 'Cayenne'
    }, {'groupValue': 'ROVER', 'text': '225', 'value': '225'}, {
      'groupValue': 'SAAB',
      'text': '9000',
      'value': '9000'
    }, {'groupValue': 'SUZUKI', 'text': 'Ignis', 'value': 'Ignis'}, {
      'groupValue': 'TOYOTA',
      'text': 'Aygo',
      'value': 'Aygo'
    }, {'groupValue': 'VOLVO', 'text': '960', 'value': '960'}, {'groupValue': 'BMW', 'text': '125', 'value': '125'}, {
      'groupValue': 'DACIA',
      'text': 'Logan MCV',
      'value': 'Logan MCV'
    }, {'groupValue': 'RENAULT', 'text': 'Fluence', 'value': 'Fluence'}, {
      'groupValue': 'JEEP',
      'text': 'Patriot',
      'value': 'Patriot'
    }, {'groupValue': 'LEXUS', 'text': 'GS450', 'value': 'GS450'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'CC',
      'value': 'CC'
    }, {'groupValue': 'PEUGEOT', 'text': '2008', 'value': '2008'}, {
      'groupValue': 'SKODA',
      'text': 'Kodiaq',
      'value': 'Kodiaq'
    }, {'groupValue': 'JAGUAR', 'text': 'XJ6', 'value': 'XJ6'}, {
      'groupValue': 'KIA',
      'text': 'Clarus',
      'value': 'Clarus'
    }, {'groupValue': 'LADA', 'text': 'Samara 21093', 'value': 'Samara 21093'}, {
      'groupValue': 'LEXUS',
      'text': 'GX450',
      'value': 'GX450'
    }, {'groupValue': 'MAZDA', 'text': '626', 'value': '626'}, {
      'groupValue': 'MITSUBISHI',
      'text': 'Galant',
      'value': 'Galant'
    }, {'groupValue': 'NISSAN', 'text': 'Double Cab', 'value': 'Double Cab'}, {
      'groupValue': 'ALFA ROMEO',
      'text': '166',
      'value': '166'
    }, {'groupValue': 'AUDI', 'text': '90', 'value': '90'}, {
      'groupValue': 'CADILLAC',
      'text': 'Escalade',
      'value': 'Escalade'
    }, {'groupValue': 'CHEVROLET', 'text': 'Blazer', 'value': 'Blazer'}, {
      'groupValue': 'CHRYSLER',
      'text': 'Grand Cherokee',
      'value': 'Grand Cherokee'
    }, {'groupValue': 'CITROEN', 'text': 'C2', 'value': 'C2'}, {
      'groupValue': 'DAEWOO',
      'text': 'Leganza',
      'value': 'Leganza'
    }, {'groupValue': 'DODGE', 'text': 'Intrepid', 'value': 'Intrepid'}, {
      'groupValue': 'FIAT',
      'text': 'Coupe',
      'value': 'Coupe'
    }, {'groupValue': 'GAZ', 'text': '33023', 'value': '33023'}, {
      'groupValue': 'HONDA',
      'text': 'FRV',
      'value': 'FRV'
    }, {'groupValue': 'SEAT', 'text': 'Ibiza', 'value': 'Ibiza'}, {
      'groupValue': 'SKODA',
      'text': 'Octavia',
      'value': 'Octavia'
    }, {'groupValue': 'SSANGYONG', 'text': 'Rodius', 'value': 'Rodius'}, {
      'groupValue': 'SUBARU',
      'text': 'Tribeca',
      'value': 'Tribeca'
    }, {'groupValue': 'PEUGEOT', 'text': '205', 'value': '205'}, {
      'groupValue': 'ROVER',
      'text': '400',
      'value': '400'
    }, {'groupValue': 'SUZUKI', 'text': 'Jimny', 'value': 'Jimny'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Caddy',
      'value': 'Caddy'
    }, {'groupValue': 'BMW', 'text': '130', 'value': '130'}, {
      'groupValue': 'DACIA',
      'text': 'Sandero',
      'value': 'Sandero'
    }, {'groupValue': 'VOLVO', 'text': 'C30', 'value': 'C30'}, {
      'groupValue': 'MINI',
      'text': 'Paceman',
      'value': 'Paceman'
    }, {'groupValue': 'OPEL', 'text': 'Cascada', 'value': 'Cascada'}, {
      'groupValue': 'RENAULT',
      'text': 'Kadjar',
      'value': 'Kadjar'
    }, {'groupValue': 'JEEP', 'text': 'Renegade', 'value': 'Renegade'}, {
      'groupValue': 'FORD',
      'text': 'Ecosport',
      'value': 'Ecosport'
    }, {'groupValue': 'TOYOTA', 'text': 'C-HR', 'value': 'C-HR'}, {
      'groupValue': 'LAND ROVER',
      'text': 'Range Rover Velar',
      'value': 'Range Rover Velar'
    }, {'groupValue': 'JAGUAR', 'text': 'XJ8', 'value': 'XJ8'}, {
      'groupValue': 'JEEP',
      'text': 'Wrangler',
      'value': 'Wrangler'
    }, {'groupValue': 'KIA', 'text': 'Joice', 'value': 'Joice'}, {
      'groupValue': 'LADA',
      'text': 'Samara 21099',
      'value': 'Samara 21099'
    }, {'groupValue': 'LEXUS', 'text': 'GX470', 'value': 'GX470'}, {
      'groupValue': 'MAZDA',
      'text': 'B2500',
      'value': 'B2500'
    }, {'groupValue': 'MITSUBISHI', 'text': 'Grandis', 'value': 'Grandis'}, {
      'groupValue': 'OPEL',
      'text': 'Combo',
      'value': 'Combo'
    }, {'groupValue': 'ALFA ROMEO', 'text': 'Brera', 'value': 'Brera'}, {
      'groupValue': 'CADILLAC',
      'text': 'SRX',
      'value': 'SRX'
    }, {'groupValue': 'CHEVROLET', 'text': 'Camaro', 'value': 'Camaro'}, {
      'groupValue': 'CHRYSLER',
      'text': 'Grand Voyager',
      'value': 'Grand Voyager'
    }, {'groupValue': 'CITROEN', 'text': 'C3', 'value': 'C3'}, {
      'groupValue': 'DAEWOO',
      'text': 'Matiz',
      'value': 'Matiz'
    }, {'groupValue': 'DODGE', 'text': 'Neon', 'value': 'Neon'}, {
      'groupValue': 'FIAT',
      'text': 'Croma',
      'value': 'Croma'
    }, {'groupValue': 'FORD', 'text': 'Escort', 'value': 'Escort'}, {
      'groupValue': 'HONDA',
      'text': 'HRV',
      'value': 'HRV'
    }, {'groupValue': 'PEUGEOT', 'text': '206', 'value': '206'}, {
      'groupValue': 'RENAULT',
      'text': 'Kangoo',
      'value': 'Kangoo'
    }, {'groupValue': 'ROVER', 'text': '416', 'value': '416'}, {
      'groupValue': 'SUZUKI',
      'text': 'Liana',
      'value': 'Liana'
    }, {'groupValue': 'TOYOTA', 'text': 'Camry', 'value': 'Camry'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Caravelle',
      'value': 'Caravelle'
    }, {'groupValue': 'VOLVO', 'text': 'C70', 'value': 'C70'}, {'groupValue': 'AUDI', 'text': 'A1', 'value': 'A1'}, {
      'groupValue': 'BMW',
      'text': '135',
      'value': '135'
    }, {'groupValue': 'SUBARU', 'text': 'XV', 'value': 'XV'}, {
      'groupValue': 'DACIA',
      'text': 'Sandero Stepway',
      'value': 'Sandero Stepway'
    }, {'groupValue': 'NISSAN', 'text': 'Juke', 'value': 'Juke'}, {
      'groupValue': 'SEAT',
      'text': 'Ibiza Cupra',
      'value': 'Ibiza Cupra'
    }, {'groupValue': 'SKODA', 'text': 'Octavia RS', 'value': 'Octavia RS'}, {
      'groupValue': 'SKODA',
      'text': 'Rapid',
      'value': 'Rapid'
    }, {'groupValue': 'MITSUBISHI', 'text': 'L200', 'value': 'L200'}, {
      'groupValue': 'NISSAN',
      'text': 'Juke Nismo',
      'value': 'Juke Nismo'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'E-Golf', 'value': 'E-Golf'}, {
      'groupValue': 'BMW',
      'text': '216',
      'value': '216'
    }, {'groupValue': 'MAZDA', 'text': 'BT-50', 'value': 'BT-50'}, {
      'groupValue': 'RENAULT',
      'text': 'Koleos',
      'value': 'Koleos'
    }, {'groupValue': 'SUBARU', 'text': 'IMPREZA XV', 'value': 'IMPREZA XV'}, {
      'groupValue': 'ROVER',
      'text': '620',
      'value': '620'
    }, {'groupValue': 'SUZUKI', 'text': 'Swift', 'value': 'Swift'}, {
      'groupValue': 'TOYOTA',
      'text': 'Carina',
      'value': 'Carina'
    }, {'groupValue': 'VOLVO', 'text': 'S40', 'value': 'S40'}, {
      'groupValue': 'FORD',
      'text': 'Expedition',
      'value': 'Expedition'
    }, {'groupValue': 'HONDA', 'text': 'Integra', 'value': 'Integra'}, {
      'groupValue': 'SEAT',
      'text': 'Inca',
      'value': 'Inca'
    }, {'groupValue': 'PEUGEOT', 'text': '207', 'value': '207'}, {
      'groupValue': 'CADILLAC',
      'text': 'STS',
      'value': 'STS'
    }, {'groupValue': 'CHEVROLET', 'text': 'Captiva', 'value': 'Captiva'}, {
      'groupValue': 'CHRYSLER',
      'text': 'Neon',
      'value': 'Neon'
    }, {'groupValue': 'CITROEN', 'text': 'C4', 'value': 'C4'}, {
      'groupValue': 'DAEWOO',
      'text': 'Musso',
      'value': 'Musso'
    }, {'groupValue': 'FIAT', 'text': 'Doblo', 'value': 'Doblo'}, {
      'groupValue': 'ALFA ROMEO',
      'text': 'GT',
      'value': 'GT'
    }, {'groupValue': 'AUDI', 'text': 'A2', 'value': 'A2'}, {
      'groupValue': 'OPEL',
      'text': 'Corsa',
      'value': 'Corsa'
    }, {'groupValue': 'JAGUAR', 'text': 'XJR', 'value': 'XJR'}, {
      'groupValue': 'KIA',
      'text': 'K2500',
      'value': 'K2500'
    }, {'groupValue': 'LADA', 'text': 'Niva', 'value': 'Niva'}, {
      'groupValue': 'LEXUS',
      'text': 'IS200',
      'value': 'IS200'
    }, {'groupValue': 'DODGE', 'text': 'Nitro', 'value': 'Nitro'}, {
      'groupValue': 'CITROEN',
      'text': 'C4 Aircross',
      'value': 'C4 Aircross'
    }, {'groupValue': 'MITSUBISHI', 'text': 'L300', 'value': 'L300'}, {
      'groupValue': 'SKODA',
      'text': 'Rapid Spaceback',
      'value': 'Rapid Spaceback'
    }, {'groupValue': 'MAZDA', 'text': 'CX-3', 'value': 'CX-3'}, {
      'groupValue': 'SUBARU',
      'text': 'BRZ',
      'value': 'BRZ'
    }, {'groupValue': 'PEUGEOT', 'text': '208', 'value': '208'}, {
      'groupValue': 'RENAULT',
      'text': 'Laguna',
      'value': 'Laguna'
    }, {'groupValue': 'ROVER', 'text': '623', 'value': '623'}, {
      'groupValue': 'SUZUKI',
      'text': 'SX4',
      'value': 'SX4'
    }, {'groupValue': 'TOYOTA', 'text': 'Celica', 'value': 'Celica'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'EOS',
      'value': 'EOS'
    }, {'groupValue': 'VOLVO', 'text': 'S60', 'value': 'S60'}, {
      'groupValue': 'FORD',
      'text': 'Explorer',
      'value': 'Explorer'
    }, {'groupValue': 'HONDA', 'text': 'Jazz', 'value': 'Jazz'}, {
      'groupValue': 'BMW',
      'text': '218',
      'value': '218'
    }, {'groupValue': 'SEAT', 'text': 'Leon', 'value': 'Leon'}, {
      'groupValue': 'CADILLAC',
      'text': 'Seville',
      'value': 'Seville'
    }, {'groupValue': 'CHEVROLET', 'text': 'Chevy Van', 'value': 'Chevy Van'}, {
      'groupValue': 'CHRYSLER',
      'text': 'New Yorker',
      'value': 'New Yorker'
    }, {'groupValue': 'DAEWOO', 'text': 'Nubira', 'value': 'Nubira'}, {
      'groupValue': 'FIAT',
      'text': 'Ducato',
      'value': 'Ducato'
    }, {'groupValue': 'DODGE', 'text': 'Ram', 'value': 'Ram'}, {
      'groupValue': 'ALFA ROMEO',
      'text': 'GTV',
      'value': 'GTV'
    }, {'groupValue': 'AUDI', 'text': 'A3', 'value': 'A3'}, {
      'groupValue': 'OPEL',
      'text': 'Frontera',
      'value': 'Frontera'
    }, {'groupValue': 'JAGUAR', 'text': 'XK8', 'value': 'XK8'}, {
      'groupValue': 'KIA',
      'text': 'K2700',
      'value': 'K2700'
    }, {'groupValue': 'LEXUS', 'text': 'IS220', 'value': 'IS220'}, {
      'groupValue': 'NISSAN',
      'text': 'Leaf',
      'value': 'Leaf'
    }, {'groupValue': 'OPEL', 'text': 'Grandland', 'value': 'Grandland'}, {
      'groupValue': 'NISSAN',
      'text': 'Maxima',
      'value': 'Maxima'
    }, {'groupValue': 'ALFA ROMEO', 'text': 'Giulietta', 'value': 'Giulietta'}, {
      'groupValue': 'PEUGEOT',
      'text': '3008',
      'value': '3008'
    }, {'groupValue': 'RENAULT', 'text': 'Latitude', 'value': 'Latitude'}, {
      'groupValue': 'FIAT',
      'text': 'FREEMONT',
      'value': 'FREEMONT'
    }, {'groupValue': 'SEAT', 'text': 'Mii', 'value': 'Mii'}, {'groupValue': 'ROVER', 'text': 'XN', 'value': 'XN'}, {
      'groupValue': 'SUZUKI',
      'text': 'Vitara',
      'value': 'Vitara'
    }, {'groupValue': 'TOYOTA', 'text': 'Corolla', 'value': 'Corolla'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Golf',
      'value': 'Golf'
    }, {'groupValue': 'VOLVO', 'text': 'S70', 'value': 'S70'}, {
      'groupValue': 'FORD',
      'text': 'F150',
      'value': 'F150'
    }, {'groupValue': 'HONDA', 'text': 'Legend', 'value': 'Legend'}, {
      'groupValue': 'HYUNDAI',
      'text': 'Accent',
      'value': 'Accent'
    }, {'groupValue': 'BMW', 'text': '220', 'value': '220'}, {
      'groupValue': 'CITROEN',
      'text': 'C4 Cactus',
      'value': 'C4 Cactus'
    }, {'groupValue': 'SKODA', 'text': 'Roomster', 'value': 'Roomster'}, {
      'groupValue': 'CADILLAC',
      'text': 'XLR',
      'value': 'XLR'
    }, {'groupValue': 'CHEVROLET', 'text': 'Corvette', 'value': 'Corvette'}, {
      'groupValue': 'CHRYSLER',
      'text': 'PT Cruiser',
      'value': 'PT Cruiser'
    }, {'groupValue': 'DAEWOO', 'text': 'Rexton', 'value': 'Rexton'}, {
      'groupValue': 'DODGE',
      'text': 'Stratus',
      'value': 'Stratus'
    }, {'groupValue': 'AUDI', 'text': 'A3 Quattro', 'value': 'A3 Quattro'}, {
      'groupValue': 'JAGUAR',
      'text': 'XKR',
      'value': 'XKR'
    }, {'groupValue': 'KIA', 'text': 'Magentis', 'value': 'Magentis'}, {
      'groupValue': 'LEXUS',
      'text': 'IS250',
      'value': 'IS250'
    }, {'groupValue': 'MITSUBISHI', 'text': 'L400', 'value': 'L400'}, {
      'groupValue': 'MAZDA',
      'text': 'CX-7',
      'value': 'CX-7'
    }, {'groupValue': 'PEUGEOT', 'text': '301', 'value': '301'}, {
      'groupValue': 'NISSAN',
      'text': 'Micra',
      'value': 'Micra'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Golf R', 'value': 'Golf R'}, {
      'groupValue': 'CITROEN',
      'text': 'C4 Picasso',
      'value': 'C4 Picasso'
    }, {'groupValue': 'OPEL', 'text': 'Crossland', 'value': 'Crossland'}, {
      'groupValue': 'CADILLAC',
      'text': 'XT5',
      'value': 'XT5'
    }, {'groupValue': 'ALFA ROMEO', 'text': 'Mito', 'value': 'Mito'}, {
      'groupValue': 'MAZDA',
      'text': 'CX-9',
      'value': 'CX-9'
    }, {'groupValue': 'RENAULT', 'text': 'Master', 'value': 'Master'}, {
      'groupValue': 'SUZUKI',
      'text': 'Wagon R+',
      'value': 'Wagon R+'
    }, {'groupValue': 'TOYOTA', 'text': 'Corolla Verso', 'value': 'Corolla Verso'}, {
      'groupValue': 'VOLVO',
      'text': 'S80',
      'value': 'S80'
    }, {'groupValue': 'FORD', 'text': 'Fiesta', 'value': 'Fiesta'}, {
      'groupValue': 'HONDA',
      'text': 'Prelude',
      'value': 'Prelude'
    }, {'groupValue': 'KIA', 'text': 'Niro', 'value': 'Niro'}, {
      'groupValue': 'SEAT',
      'text': 'Toledo',
      'value': 'Toledo'
    }, {'groupValue': 'SKODA', 'text': 'Superb', 'value': 'Superb'}, {
      'groupValue': 'CHEVROLET',
      'text': 'Epica',
      'value': 'Epica'
    }, {'groupValue': 'CHRYSLER', 'text': 'Sebring', 'value': 'Sebring'}, {
      'groupValue': 'DAEWOO',
      'text': 'Tacuma',
      'value': 'Tacuma'
    }, {'groupValue': 'DODGE', 'text': 'Viper', 'value': 'Viper'}, {
      'groupValue': 'FIAT',
      'text': 'Marea',
      'value': 'Marea'
    }, {'groupValue': 'AUDI', 'text': 'A4', 'value': 'A4'}, {
      'groupValue': 'LEXUS',
      'text': 'IS300',
      'value': 'IS300'
    }, {'groupValue': 'MITSUBISHI', 'text': 'Lancer', 'value': 'Lancer'}, {
      'groupValue': 'BMW',
      'text': '225',
      'value': '225'
    }, {'groupValue': 'OPEL', 'text': 'Insignia', 'value': 'Insignia'}, {
      'groupValue': 'NISSAN',
      'text': 'Murano',
      'value': 'Murano'
    }, {'groupValue': 'MAZDA', 'text': 'CX5', 'value': 'CX5'}, {
      'groupValue': 'AUDI',
      'text': 'A4 Allroad',
      'value': 'A4 Allroad'
    }, {'groupValue': 'LEXUS', 'text': 'IS350', 'value': 'IS350'}, {
      'groupValue': 'SKODA',
      'text': 'YETI',
      'value': 'YETI'
    }, {'groupValue': 'RENAULT', 'text': 'Megane', 'value': 'Megane'}, {
      'groupValue': 'TOYOTA',
      'text': 'Dyna',
      'value': 'Dyna'
    }, {'groupValue': 'VOLVO', 'text': 'S90', 'value': 'S90'}, {
      'groupValue': 'FORD',
      'text': 'Focus',
      'value': 'Focus'
    }, {'groupValue': 'HONDA', 'text': 'S2000', 'value': 'S2000'}, {
      'groupValue': 'PEUGEOT',
      'text': '306',
      'value': '306'
    }, {'groupValue': 'CHEVROLET', 'text': 'Equinox', 'value': 'Equinox'}, {
      'groupValue': 'CHRYSLER',
      'text': 'Stratus',
      'value': 'Stratus'
    }, {'groupValue': 'CITROEN', 'text': 'C5', 'value': 'C5'}, {
      'groupValue': 'FIAT',
      'text': 'Multipla',
      'value': 'Multipla'
    }, {'groupValue': 'ALFA ROMEO', 'text': 'Spider', 'value': 'Spider'}, {
      'groupValue': 'BMW',
      'text': '316',
      'value': '316'
    }, {'groupValue': 'KIA', 'text': 'Opirus', 'value': 'Opirus'}, {
      'groupValue': 'MITSUBISHI',
      'text': 'Lancer Evo',
      'value': 'Lancer Evo'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Golf Sportsvan', 'value': 'Golf Sportsvan'}, {
      'groupValue': 'KIA',
      'text': 'Optima',
      'value': 'Optima'
    }, {'groupValue': 'MITSUBISHI', 'text': 'Lantra', 'value': 'Lantra'}, {
      'groupValue': 'RENAULT',
      'text': 'Megane Coupe',
      'value': 'Megane Coupe'
    }, {'groupValue': 'ALFA ROMEO', 'text': 'Stelvio', 'value': 'Stelvio'}, {
      'groupValue': 'LEXUS',
      'text': 'ISF',
      'value': 'ISF'
    }, {'groupValue': 'TOYOTA', 'text': 'GT86', 'value': 'GT86'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Jetta',
      'value': 'Jetta'
    }, {'groupValue': 'VOLVO', 'text': 'V40', 'value': 'V40'}, {
      'groupValue': 'FORD',
      'text': 'Focus C-Max',
      'value': 'Focus C-Max'
    }, {'groupValue': 'HONDA', 'text': 'Shuttle', 'value': 'Shuttle'}, {
      'groupValue': 'PEUGEOT',
      'text': '307',
      'value': '307'
    }, {'groupValue': 'CHEVROLET', 'text': 'Evanda', 'value': 'Evanda'}, {
      'groupValue': 'CHRYSLER',
      'text': 'Voyager',
      'value': 'Voyager'
    }, {'groupValue': 'CITROEN', 'text': 'C8', 'value': 'C8'}, {
      'groupValue': 'FIAT',
      'text': 'Palio',
      'value': 'Palio'
    }, {'groupValue': 'AUDI', 'text': 'A4 Quattro', 'value': 'A4 Quattro'}, {
      'groupValue': 'BMW',
      'text': '318',
      'value': '318'
    }, {'groupValue': 'OPEL', 'text': 'Kadett', 'value': 'Kadett'}, {
      'groupValue': 'MAZDA',
      'text': 'Demio',
      'value': 'Demio'
    }, {'groupValue': 'NISSAN', 'text': 'NP300 Pick up', 'value': 'NP300 Pick up'}, {
      'groupValue': 'PEUGEOT',
      'text': '307 SW',
      'value': '307 SW'
    }, {'groupValue': 'MAZDA', 'text': 'MPV', 'value': 'MPV'}, {
      'groupValue': 'CITROEN',
      'text': 'DS3',
      'value': 'DS3'
    }, {'groupValue': 'NISSAN', 'text': 'NV200', 'value': 'NV200'}, {
      'groupValue': 'LEXUS',
      'text': 'LFA',
      'value': 'LFA'
    }, {'groupValue': 'RENAULT', 'text': 'Megane Van', 'value': 'Megane Van'}, {
      'groupValue': 'TOYOTA',
      'text': 'Hiace',
      'value': 'Hiace'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Karmann', 'value': 'Karmann'}, {
      'groupValue': 'VOLVO',
      'text': 'V50',
      'value': 'V50'
    }, {'groupValue': 'FORD', 'text': 'Fusion', 'value': 'Fusion'}, {
      'groupValue': 'HONDA',
      'text': 'Stream',
      'value': 'Stream'
    }, {'groupValue': 'CHEVROLET', 'text': 'Express', 'value': 'Express'}, {
      'groupValue': 'FIAT',
      'text': 'Panda',
      'value': 'Panda'
    }, {'groupValue': 'BMW', 'text': '320', 'value': '320'}, {
      'groupValue': 'OPEL',
      'text': 'Meriva',
      'value': 'Meriva'
    }, {'groupValue': 'KIA', 'text': 'Picanto', 'value': 'Picanto'}, {
      'groupValue': 'AUDI',
      'text': 'A5',
      'value': 'A5'
    }, {'groupValue': 'OPEL', 'text': 'Mokka', 'value': 'Mokka'}, {
      'groupValue': 'MITSUBISHI',
      'text': 'Outlander',
      'value': 'Outlander'
    }, {'groupValue': 'PEUGEOT', 'text': '308', 'value': '308'}, {
      'groupValue': 'VOLVO',
      'text': 'V60',
      'value': 'V60'
    }, {'groupValue': 'CITROEN', 'text': 'DS5', 'value': 'DS5'}, {
      'groupValue': 'RENAULT',
      'text': 'Modus',
      'value': 'Modus'
    }, {'groupValue': 'TOYOTA', 'text': 'Hilux', 'value': 'Hilux'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'LT28',
      'value': 'LT28'
    }, {'groupValue': 'FORD', 'text': 'Galaxy', 'value': 'Galaxy'}, {
      'groupValue': 'CHEVROLET',
      'text': 'Kalos',
      'value': 'Kalos'
    }, {'groupValue': 'FIAT', 'text': 'Punto', 'value': 'Punto'}, {'groupValue': 'AUDI', 'text': 'A6', 'value': 'A6'}, {
      'groupValue': 'BMW',
      'text': '323',
      'value': '323'
    }, {'groupValue': 'KIA', 'text': 'Pregio', 'value': 'Pregio'}, {
      'groupValue': 'LEXUS',
      'text': 'LS400',
      'value': 'LS400'
    }, {'groupValue': 'MAZDA', 'text': 'MX3', 'value': 'MX3'}, {
      'groupValue': 'NISSAN',
      'text': 'NV300',
      'value': 'NV300'
    }, {'groupValue': 'PEUGEOT', 'text': '4008', 'value': '4008'}, {
      'groupValue': 'VOLVO',
      'text': 'V70',
      'value': 'V70'
    }, {'groupValue': 'AUDI', 'text': 'A6 Allroad', 'value': 'A6 Allroad'}, {
      'groupValue': 'TOYOTA',
      'text': 'IQ',
      'value': 'IQ'
    }, {'groupValue': 'FORD', 'text': 'Grand C-Max', 'value': 'Grand C-Max'}, {
      'groupValue': 'RENAULT',
      'text': 'Safrane',
      'value': 'Safrane'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'LT35', 'value': 'LT35'}, {
      'groupValue': 'CHEVROLET',
      'text': 'Lacetti',
      'value': 'Lacetti'
    }, {'groupValue': 'CITROEN', 'text': 'Jumper', 'value': 'Jumper'}, {
      'groupValue': 'FIAT',
      'text': 'Punto Grande',
      'value': 'Punto Grande'
    }, {'groupValue': 'BMW', 'text': '325', 'value': '325'}, {
      'groupValue': 'OPEL',
      'text': 'Monterey',
      'value': 'Monterey'
    }, {'groupValue': 'KIA', 'text': 'Pride', 'value': 'Pride'}, {
      'groupValue': 'LEXUS',
      'text': 'LS430',
      'value': 'LS430'
    }, {'groupValue': 'MAZDA', 'text': 'MX5', 'value': 'MX5'}, {
      'groupValue': 'MITSUBISHI',
      'text': 'Pajero',
      'value': 'Pajero'
    }, {'groupValue': 'NISSAN', 'text': 'Navara', 'value': 'Navara'}, {
      'groupValue': 'VOLVO',
      'text': 'XC40',
      'value': 'XC40'
    }, {'groupValue': 'NISSAN', 'text': 'Note', 'value': 'Note'}, {
      'groupValue': 'TOYOTA',
      'text': 'Land Cruiser',
      'value': 'Land Cruiser'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'LT46', 'value': 'LT46'}, {
      'groupValue': 'FIAT',
      'text': 'Scudo',
      'value': 'Scudo'
    }, {'groupValue': 'FORD', 'text': 'Ka', 'value': 'Ka'}, {
      'groupValue': 'PEUGEOT',
      'text': '406',
      'value': '406'
    }, {'groupValue': 'CHEVROLET', 'text': 'Lumina', 'value': 'Lumina'}, {
      'groupValue': 'CITROEN',
      'text': 'Jumpy',
      'value': 'Jumpy'
    }, {'groupValue': 'AUDI', 'text': 'A6 Quattro', 'value': 'A6 Quattro'}, {
      'groupValue': 'BMW',
      'text': '328',
      'value': '328'
    }, {'groupValue': 'OPEL', 'text': 'Movano', 'value': 'Movano'}, {
      'groupValue': 'KIA',
      'text': 'Retona',
      'value': 'Retona'
    }, {'groupValue': 'LEXUS', 'text': 'LX470', 'value': 'LX470'}, {
      'groupValue': 'MAZDA',
      'text': 'MX6',
      'value': 'MX6'
    }, {'groupValue': 'MITSUBISHI', 'text': 'Pajero Pinin', 'value': 'Pajero Pinin'}, {
      'groupValue': 'RENAULT',
      'text': 'Scenic',
      'value': 'Scenic'
    }, {'groupValue': 'FORD', 'text': 'Kuga', 'value': 'Kuga'}, {
      'groupValue': 'NISSAN',
      'text': 'Pathfinder',
      'value': 'Pathfinder'
    }, {'groupValue': 'AUDI', 'text': 'A7', 'value': 'A7'}, {
      'groupValue': 'TOYOTA',
      'text': 'Land Cruiser 150',
      'value': 'Land Cruiser 150'
    }, {'groupValue': 'RENAULT', 'text': 'Scenic RX4', 'value': 'Scenic RX4'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Lupo',
      'value': 'Lupo'
    }, {'groupValue': 'FIAT', 'text': 'Seicento', 'value': 'Seicento'}, {
      'groupValue': 'PEUGEOT',
      'text': '407',
      'value': '407'
    }, {'groupValue': 'CHEVROLET', 'text': 'Matiz', 'value': 'Matiz'}, {
      'groupValue': 'CITROEN',
      'text': 'Saxo',
      'value': 'Saxo'
    }, {'groupValue': 'BMW', 'text': '330', 'value': '330'}, {
      'groupValue': 'OPEL',
      'text': 'Omega',
      'value': 'Omega'
    }, {'groupValue': 'KIA', 'text': 'Rio', 'value': 'Rio'}, {
      'groupValue': 'LEXUS',
      'text': 'RX300',
      'value': 'RX300'
    }, {'groupValue': 'MAZDA', 'text': 'Pick Up', 'value': 'Pick Up'}, {
      'groupValue': 'MITSUBISHI',
      'text': 'Pajero Sport',
      'value': 'Pajero Sport'
    }, {'groupValue': 'VOLVO', 'text': 'XC60', 'value': 'XC60'}, {
      'groupValue': 'KIA',
      'text': 'STONIC',
      'value': 'STONIC'
    }, {'groupValue': 'NISSAN', 'text': 'Patrol', 'value': 'Patrol'}, {
      'groupValue': 'PEUGEOT',
      'text': '5008',
      'value': '5008'
    }, {'groupValue': 'TOYOTA', 'text': 'Land Cruiser V8', 'value': 'Land Cruiser V8'}, {
      'groupValue': 'RENAULT',
      'text': 'Thalia',
      'value': 'Thalia'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Multivan', 'value': 'Multivan'}, {
      'groupValue': 'FIAT',
      'text': 'Stilo',
      'value': 'Stilo'
    }, {'groupValue': 'FORD', 'text': 'Maverick', 'value': 'Maverick'}, {
      'groupValue': 'OPEL',
      'text': 'Signum',
      'value': 'Signum'
    }, {'groupValue': 'CHEVROLET', 'text': 'Nubira', 'value': 'Nubira'}, {
      'groupValue': 'CITROEN',
      'text': 'XM',
      'value': 'XM'
    }, {'groupValue': 'AUDI', 'text': 'A8', 'value': 'A8'}, {'groupValue': 'BMW', 'text': '335', 'value': '335'}, {
      'groupValue': 'LEXUS',
      'text': 'RX350',
      'value': 'RX350'
    }, {'groupValue': 'MAZDA', 'text': 'Premacy', 'value': 'Premacy'}, {
      'groupValue': 'VOLVO',
      'text': 'XC70',
      'value': 'XC70'
    }, {'groupValue': 'CHEVROLET', 'text': 'Orlando', 'value': 'Orlando'}, {
      'groupValue': 'MITSUBISHI',
      'text': 'Space Runner',
      'value': 'Space Runner'
    }, {'groupValue': 'RENAULT', 'text': 'Trafic', 'value': 'Trafic'}, {
      'groupValue': 'VOLVO',
      'text': 'XC90',
      'value': 'XC90'
    }, {'groupValue': 'TOYOTA', 'text': 'MR2', 'value': 'MR2'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Passat',
      'value': 'Passat'
    }, {'groupValue': 'FIAT', 'text': 'Strada', 'value': 'Strada'}, {
      'groupValue': 'FORD',
      'text': 'Mondeo',
      'value': 'Mondeo'
    }, {'groupValue': 'HYUNDAI', 'text': 'Atos', 'value': 'Atos'}, {
      'groupValue': 'OPEL',
      'text': 'Sintra',
      'value': 'Sintra'
    }, {'groupValue': 'CITROEN', 'text': 'Xantia', 'value': 'Xantia'}, {
      'groupValue': 'AUDI',
      'text': 'A8 Quattro',
      'value': 'A8 Quattro'
    }, {'groupValue': 'BMW', 'text': '518', 'value': '518'}, {
      'groupValue': 'NISSAN',
      'text': 'Pickup',
      'value': 'Pickup'
    }, {'groupValue': 'KIA', 'text': 'Sephia', 'value': 'Sephia'}, {
      'groupValue': 'LEXUS',
      'text': 'RX400',
      'value': 'RX400'
    }, {'groupValue': 'MAZDA', 'text': 'RX8', 'value': 'RX8'}, {
      'groupValue': 'PEUGEOT',
      'text': '508',
      'value': '508'
    }, {'groupValue': 'NISSAN', 'text': 'Pixo', 'value': 'Pixo'}, {
      'groupValue': 'MITSUBISHI',
      'text': 'Space Star',
      'value': 'Space Star'
    }, {'groupValue': 'LEXUS', 'text': 'RX450H', 'value': 'RX450H'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Passat CC',
      'value': 'Passat CC'
    }, {'groupValue': 'RENAULT', 'text': 'Twingo', 'value': 'Twingo'}, {
      'groupValue': 'TOYOTA',
      'text': 'Picnic',
      'value': 'Picnic'
    }, {'groupValue': 'FORD', 'text': 'Mustang', 'value': 'Mustang'}, {
      'groupValue': 'OPEL',
      'text': 'Tigra',
      'value': 'Tigra'
    }, {'groupValue': 'PEUGEOT', 'text': '607', 'value': '607'}, {
      'groupValue': 'CHEVROLET',
      'text': 'S10',
      'value': 'S10'
    }, {'groupValue': 'CITROEN', 'text': 'Xsara', 'value': 'Xsara'}, {
      'groupValue': 'AUDI',
      'text': 'Allroad',
      'value': 'Allroad'
    }, {'groupValue': 'BMW', 'text': '520', 'value': '520'}, {
      'groupValue': 'KIA',
      'text': 'Shuma',
      'value': 'Shuma'
    }, {'groupValue': 'MAZDA', 'text': 'Tribute', 'value': 'Tribute'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'A140',
      'value': 'A140'
    }, {'groupValue': 'FIAT', 'text': 'Talento', 'value': 'Talento'}, {
      'groupValue': 'FIAT',
      'text': 'Tipo',
      'value': 'Tipo'
    }, {'groupValue': 'MITSUBISHI', 'text': 'Space Wagon', 'value': 'Space Wagon'}, {
      'groupValue': 'TOYOTA',
      'text': 'Previa',
      'value': 'Previa'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Phaeton', 'value': 'Phaeton'}, {
      'groupValue': 'FORD',
      'text': 'Probe',
      'value': 'Probe'
    }, {'groupValue': 'OPEL', 'text': 'Vectra', 'value': 'Vectra'}, {
      'groupValue': 'PEUGEOT',
      'text': '806',
      'value': '806'
    }, {'groupValue': 'CHEVROLET', 'text': 'Silverado', 'value': 'Silverado'}, {
      'groupValue': 'CITROEN',
      'text': 'Xsara Picasso',
      'value': 'Xsara Picasso'
    }, {'groupValue': 'AUDI', 'text': 'Coupe', 'value': 'Coupe'}, {
      'groupValue': 'BMW',
      'text': '523',
      'value': '523'
    }, {'groupValue': 'NISSAN', 'text': 'Primastar', 'value': 'Primastar'}, {
      'groupValue': 'KIA',
      'text': 'Sorento',
      'value': 'Sorento'
    }, {'groupValue': 'LEXUS', 'text': 'SC400', 'value': 'SC400'}, {
      'groupValue': 'MAZDA',
      'text': 'Xedos6',
      'value': 'Xedos6'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'A150', 'value': 'A150'}, {
      'groupValue': 'RENAULT',
      'text': 'Vel Satis',
      'value': 'Vel Satis'
    }, {'groupValue': 'AUDI', 'text': 'Q3', 'value': 'Q3'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'A160',
      'value': 'A160'
    }, {'groupValue': 'KIA', 'text': 'Soul', 'value': 'Soul'}, {
      'groupValue': 'TOYOTA',
      'text': 'Prius',
      'value': 'Prius'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Polo', 'value': 'Polo'}, {
      'groupValue': 'FORD',
      'text': 'Puma',
      'value': 'Puma'
    }, {'groupValue': 'OPEL', 'text': 'Vivaro', 'value': 'Vivaro'}, {
      'groupValue': 'PEUGEOT',
      'text': '807',
      'value': '807'
    }, {'groupValue': 'CHEVROLET', 'text': 'Spark', 'value': 'Spark'}, {
      'groupValue': 'CITROEN',
      'text': 'ZX',
      'value': 'ZX'
    }, {'groupValue': 'BMW', 'text': '525', 'value': '525'}, {
      'groupValue': 'NISSAN',
      'text': 'Primera',
      'value': 'Primera'
    }, {'groupValue': 'LEXUS', 'text': 'SC430', 'value': 'SC430'}, {
      'groupValue': 'MAZDA',
      'text': 'Xedos9',
      'value': 'Xedos9'
    }, {'groupValue': 'RENAULT', 'text': 'Zoe', 'value': 'Zoe'}, {
      'groupValue': 'AUDI',
      'text': 'Q5',
      'value': 'Q5'
    }, {'groupValue': 'TOYOTA', 'text': 'Proace', 'value': 'Proace'}, {
      'groupValue': 'NISSAN',
      'text': 'Pulsar',
      'value': 'Pulsar'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'A170', 'value': 'A170'}, {
      'groupValue': 'PEUGEOT',
      'text': 'BIPPER',
      'value': 'BIPPER'
    }, {'groupValue': 'KIA', 'text': 'Sportage', 'value': 'Sportage'}, {
      'groupValue': 'FORD',
      'text': 'Ranger',
      'value': 'Ranger'
    }, {'groupValue': 'OPEL', 'text': 'Zafira', 'value': 'Zafira'}, {
      'groupValue': 'CHEVROLET',
      'text': 'Suburban',
      'value': 'Suburban'
    }, {'groupValue': 'BMW', 'text': '528', 'value': '528'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Sharan',
      'value': 'Sharan'
    }, {'groupValue': 'KIA', 'text': 'Stinger', 'value': 'Stinger'}, {
      'groupValue': 'NISSAN',
      'text': 'Qashqai',
      'value': 'Qashqai'
    }, {'groupValue': 'PEUGEOT', 'text': 'Boxer', 'value': 'Boxer'}, {
      'groupValue': 'TOYOTA',
      'text': 'RAV-4',
      'value': 'RAV-4'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'A180', 'value': 'A180'}, {
      'groupValue': 'FORD',
      'text': 'S-Max',
      'value': 'S-Max'
    }, {'groupValue': 'CHEVROLET', 'text': 'Tacuma', 'value': 'Tacuma'}, {
      'groupValue': 'AUDI',
      'text': 'Q7',
      'value': 'Q7'
    }, {'groupValue': 'BMW', 'text': '530', 'value': '530'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Shuttle',
      'value': 'Shuttle'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'T-Roc', 'value': 'T-Roc'}, {
      'groupValue': 'AUDI',
      'text': 'R8',
      'value': 'R8'
    }, {'groupValue': 'KIA', 'text': 'Venga', 'value': 'Venga'}, {
      'groupValue': 'NISSAN',
      'text': 'Qazna',
      'value': 'Qazna'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'A190', 'value': 'A190'}, {
      'groupValue': 'TOYOTA',
      'text': 'Starlet',
      'value': 'Starlet'
    }, {'groupValue': 'FORD', 'text': 'Scorpio', 'value': 'Scorpio'}, {
      'groupValue': 'CHEVROLET',
      'text': 'Tahoe',
      'value': 'Tahoe'
    }, {'groupValue': 'BMW', 'text': '535', 'value': '535'}, {
      'groupValue': 'PEUGEOT',
      'text': 'Expert',
      'value': 'Expert'
    }, {'groupValue': 'AUDI', 'text': 'RS Q3', 'value': 'RS Q3'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Tiguan',
      'value': 'Tiguan'
    }, {'groupValue': 'PEUGEOT', 'text': 'Partner', 'value': 'Partner'}, {
      'groupValue': 'TOYOTA',
      'text': 'Supra',
      'value': 'Supra'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'A200', 'value': 'A200'}, {
      'groupValue': 'CHEVROLET',
      'text': 'Trailblazer',
      'value': 'Trailblazer'
    }, {'groupValue': 'BMW', 'text': '540', 'value': '540'}, {
      'groupValue': 'NISSAN',
      'text': 'Serena',
      'value': 'Serena'
    }, {'groupValue': 'FORD', 'text': 'Taurus', 'value': 'Taurus'}, {
      'groupValue': 'CHEVROLET',
      'text': 'Trans Sport',
      'value': 'Trans Sport'
    }, {'groupValue': 'PEUGEOT', 'text': 'RCZ', 'value': 'RCZ'}, {
      'groupValue': 'TOYOTA',
      'text': 'Urban Cruiser',
      'value': 'Urban Cruiser'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Touareg', 'value': 'Touareg'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'A210',
      'value': 'A210'
    }, {'groupValue': 'AUDI', 'text': 'RS4', 'value': 'RS4'}, {'groupValue': 'BMW', 'text': '545', 'value': '545'}, {
      'groupValue': 'NISSAN',
      'text': 'Sunny',
      'value': 'Sunny'
    }, {'groupValue': 'FORD', 'text': 'Thunderbird', 'value': 'Thunderbird'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'A250',
      'value': 'A250'
    }, {'groupValue': 'CHEVROLET', 'text': 'Trax', 'value': 'Trax'}, {
      'groupValue': 'AUDI',
      'text': 'RS5',
      'value': 'RS5'
    }, {'groupValue': 'NISSAN', 'text': 'Terrano', 'value': 'Terrano'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Touran',
      'value': 'Touran'
    }, {'groupValue': 'FORD', 'text': 'Tourneo', 'value': 'Tourneo'}, {
      'groupValue': 'BMW',
      'text': '550',
      'value': '550'
    }, {'groupValue': 'TOYOTA', 'text': 'Verso', 'value': 'Verso'}, {
      'groupValue': 'NISSAN',
      'text': 'Tiida',
      'value': 'Tiida'
    }, {'groupValue': 'CHEVROLET', 'text': 'Venture', 'value': 'Venture'}, {
      'groupValue': 'TOYOTA',
      'text': 'Yaris',
      'value': 'Yaris'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Transporter', 'value': 'Transporter'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'B150',
      'value': 'B150'
    }, {'groupValue': 'HYUNDAI', 'text': 'Coupe', 'value': 'Coupe'}, {
      'groupValue': 'AUDI',
      'text': 'RS6',
      'value': 'RS6'
    }, {'groupValue': 'BMW', 'text': '630', 'value': '630'}, {
      'groupValue': 'FORD',
      'text': 'Transit',
      'value': 'Transit'
    }, {'groupValue': 'BMW', 'text': '640', 'value': '640'}, {
      'groupValue': 'AUDI',
      'text': 'RS7',
      'value': 'RS7'
    }, {'groupValue': 'CHEVROLET', 'text': 'Volt', 'value': 'Volt'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'B170',
      'value': 'B170'
    }, {'groupValue': 'TOYOTA', 'text': 'Yaris Verso', 'value': 'Yaris Verso'}, {
      'groupValue': 'FORD',
      'text': 'Windstar',
      'value': 'Windstar'
    }, {'groupValue': 'NISSAN', 'text': 'Vanette', 'value': 'Vanette'}, {
      'groupValue': 'VOLKSWAGEN',
      'text': 'Up!',
      'value': 'Up!'
    }, {'groupValue': 'VOLKSWAGEN', 'text': 'Vento', 'value': 'Vento'}, {
      'groupValue': 'AUDI',
      'text': 'S3 Quattro',
      'value': 'S3 Quattro'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'B180', 'value': 'B180'}, {
      'groupValue': 'NISSAN',
      'text': 'Xtrail',
      'value': 'Xtrail'
    }, {'groupValue': 'BMW', 'text': '645', 'value': '645'}, {
      'groupValue': 'AUDI',
      'text': 'S4',
      'value': 'S4'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'B200', 'value': 'B200'}, {
      'groupValue': 'BMW',
      'text': '650',
      'value': '650'
    }, {'groupValue': 'AUDI', 'text': 'S5', 'value': 'S5'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'C180',
      'value': 'C180'
    }, {'groupValue': 'BMW', 'text': '725', 'value': '725'}, {
      'groupValue': 'AUDI',
      'text': 'S6',
      'value': 'S6'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'C200', 'value': 'C200'}, {
      'groupValue': 'BMW',
      'text': '728',
      'value': '728'
    }, {'groupValue': 'AUDI', 'text': 'S6 Quattro', 'value': 'S6 Quattro'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'C220',
      'value': 'C220'
    }, {'groupValue': 'BMW', 'text': '730', 'value': '730'}, {
      'groupValue': 'BMW',
      'text': '735',
      'value': '735'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'C230', 'value': 'C230'}, {
      'groupValue': 'AUDI',
      'text': 'S8',
      'value': 'S8'
    }, {'groupValue': 'BMW', 'text': '740', 'value': '740'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'C240',
      'value': 'C240'
    }, {'groupValue': 'AUDI', 'text': 'S8 Quattro', 'value': 'S8 Quattro'}, {
      'groupValue': 'AUDI',
      'text': 'SQ5',
      'value': 'SQ5'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'C250', 'value': 'C250'}, {
      'groupValue': 'BMW',
      'text': '745',
      'value': '745'
    }, {'groupValue': 'HYUNDAI', 'text': 'Elantra', 'value': 'Elantra'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'C270',
      'value': 'C270'
    }, {'groupValue': 'AUDI', 'text': 'TT', 'value': 'TT'}, {'groupValue': 'BMW', 'text': '750', 'value': '750'}, {
      'groupValue': 'BMW',
      'text': '760',
      'value': '760'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'C280', 'value': 'C280'}, {
      'groupValue': 'AUDI',
      'text': 'TT Quattro',
      'value': 'TT Quattro'
    }, {'groupValue': 'BMW', 'text': 'M3', 'value': 'M3'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'C320',
      'value': 'C320'
    }, {'groupValue': 'AUDI', 'text': 'V8', 'value': 'V8'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'C350',
      'value': 'C350'
    }, {'groupValue': 'BMW', 'text': 'M5', 'value': 'M5'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'CL180',
      'value': 'CL180'
    }, {'groupValue': 'BMW', 'text': 'M6', 'value': 'M6'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'CL420',
      'value': 'CL420'
    }, {'groupValue': 'BMW', 'text': 'X1', 'value': 'X1'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'CL500',
      'value': 'CL500'
    }, {'groupValue': 'BMW', 'text': 'X3', 'value': 'X3'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'CL600',
      'value': 'CL600'
    }, {'groupValue': 'BMW', 'text': 'X5', 'value': 'X5'}, {
      'groupValue': 'BMW',
      'text': 'X5M',
      'value': 'X5M'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLA', 'value': 'CLA'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'CLK200',
      'value': 'CLK200'
    }, {'groupValue': 'BMW', 'text': 'X6', 'value': 'X6'}, {
      'groupValue': 'BMW',
      'text': 'X6M',
      'value': 'X6M'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLK230', 'value': 'CLK230'}, {
      'groupValue': 'HYUNDAI',
      'text': 'Galloper',
      'value': 'Galloper'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLK240', 'value': 'CLK240'}, {
      'groupValue': 'BMW',
      'text': 'Z3',
      'value': 'Z3'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLK270', 'value': 'CLK270'}, {
      'groupValue': 'BMW',
      'text': 'Z4',
      'value': 'Z4'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLK280', 'value': 'CLK280'}, {
      'groupValue': 'BMW',
      'text': 'Z4M',
      'value': 'Z4M'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLK320', 'value': 'CLK320'}, {
      'groupValue': 'BMW',
      'text': 'i3',
      'value': 'i3'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLK430', 'value': 'CLK430'}, {
      'groupValue': 'HYUNDAI',
      'text': 'Genesis',
      'value': 'Genesis'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLK500', 'value': 'CLK500'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'CLS320',
      'value': 'CLS320'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLS350', 'value': 'CLS350'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'CLS500',
      'value': 'CLS500'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLS55', 'value': 'CLS55'}, {
      'groupValue': 'HYUNDAI',
      'text': 'Getz',
      'value': 'Getz'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'CLS63', 'value': 'CLS63'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'Citan',
      'value': 'Citan'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'E200', 'value': 'E200'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'E210',
      'value': 'E210'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'E220', 'value': 'E220'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'E230',
      'value': 'E230'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'E240', 'value': 'E240'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'E250',
      'value': 'E250'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'E270', 'value': 'E270'}, {
      'groupValue': 'HYUNDAI',
      'text': 'H1',
      'value': 'H1'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'E280', 'value': 'E280'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'E290',
      'value': 'E290'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'E300', 'value': 'E300'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'E320',
      'value': 'E320'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'E350', 'value': 'E350'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'E400',
      'value': 'E400'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'E420', 'value': 'E420'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'E430',
      'value': 'E430'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'E50', 'value': 'E50'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'E500',
      'value': 'E500'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'E55', 'value': 'E55'}, {
      'groupValue': 'HYUNDAI',
      'text': 'H100',
      'value': 'H100'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'G270', 'value': 'G270'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'G300',
      'value': 'G300'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'G320', 'value': 'G320'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'G350',
      'value': 'G350'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'G400', 'value': 'G400'}, {
      'groupValue': 'HYUNDAI',
      'text': 'I20',
      'value': 'I20'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'G500', 'value': 'G500'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'G55',
      'value': 'G55'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'GL420', 'value': 'GL420'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'GL500',
      'value': 'GL500'
    }, {'groupValue': 'HYUNDAI', 'text': 'I30', 'value': 'I30'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'GLA',
      'value': 'GLA'
    }, {'groupValue': 'HYUNDAI', 'text': 'I40', 'value': 'I40'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'GLC',
      'value': 'GLC'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'GLE', 'value': 'GLE'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'GLK200',
      'value': 'GLK200'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'GLS', 'value': 'GLS'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'ML230',
      'value': 'ML230'
    }, {'groupValue': 'HYUNDAI', 'text': 'IX35', 'value': 'IX35'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'ML250',
      'value': 'ML250'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'ML270', 'value': 'ML270'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'ML280',
      'value': 'ML280'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'ML320', 'value': 'ML320'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'ML350',
      'value': 'ML350'
    }, {'groupValue': 'HYUNDAI', 'text': 'Lantra', 'value': 'Lantra'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'ML400',
      'value': 'ML400'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'ML430', 'value': 'ML430'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'ML500',
      'value': 'ML500'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'ML55', 'value': 'ML55'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'R320',
      'value': 'R320'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'R350', 'value': 'R350'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'R500',
      'value': 'R500'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'S280', 'value': 'S280'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'S300',
      'value': 'S300'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'S320', 'value': 'S320'}, {
      'groupValue': 'HYUNDAI',
      'text': 'Matrix',
      'value': 'Matrix'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'S350', 'value': 'S350'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'S400',
      'value': 'S400'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'S420', 'value': 'S420'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'S430',
      'value': 'S430'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'S500', 'value': 'S500'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'S55',
      'value': 'S55'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'S600', 'value': 'S600'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'SL280',
      'value': 'SL280'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'SL300', 'value': 'SL300'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'SL320',
      'value': 'SL320'
    }, {'groupValue': 'HYUNDAI', 'text': 'Santa Fe', 'value': 'Santa Fe'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'SL350',
      'value': 'SL350'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'SL500', 'value': 'SL500'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'SL55',
      'value': 'SL55'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'SLK200', 'value': 'SLK200'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'SLK230',
      'value': 'SLK230'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'SLK280', 'value': 'SLK280'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'SLK320',
      'value': 'SLK320'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'SLK350', 'value': 'SLK350'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'SLK500',
      'value': 'SLK500'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'SLK55', 'value': 'SLK55'}, {
      'groupValue': 'HYUNDAI',
      'text': 'Santamo',
      'value': 'Santamo'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'SLS', 'value': 'SLS'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'Sprinter 314',
      'value': 'Sprinter 314'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'V220', 'value': 'V220'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'V250',
      'value': 'V250'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'V280', 'value': 'V280'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'Vaneo',
      'value': 'Vaneo'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'Viano', 'value': 'Viano'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'Vito 119',
      'value': 'Vito 119'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'Vito108', 'value': 'Vito108'}, {
      'groupValue': 'HYUNDAI',
      'text': 'Sonata',
      'value': 'Sonata'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'Vito109', 'value': 'Vito109'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'Vito110',
      'value': 'Vito110'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'Vito111', 'value': 'Vito111'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'Vito112',
      'value': 'Vito112'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'Vito113', 'value': 'Vito113'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'Vito114',
      'value': 'Vito114'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'Vito115', 'value': 'Vito115'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'Vito119',
      'value': 'Vito119'
    }, {'groupValue': 'MERCEDES BENZ', 'text': 'Vito120', 'value': 'Vito120'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'Vito122',
      'value': 'Vito122'
    }, {'groupValue': 'HYUNDAI', 'text': 'Terracan', 'value': 'Terracan'}, {
      'groupValue': 'MERCEDES BENZ',
      'text': 'Vito230',
      'value': 'Vito230'
    }, {'groupValue': 'HYUNDAI', 'text': 'Trajet', 'value': 'Trajet'}, {
      'groupValue': 'HYUNDAI',
      'text': 'Tucson',
      'value': 'Tucson'
    }, {'groupValue': 'HYUNDAI', 'text': 'XG', 'value': 'XG'}, {
      'groupValue': 'HYUNDAI',
      'text': 'VELOSTER',
      'value': 'VELOSTER'
    }, {'groupValue': 'HYUNDAI', 'text': 'GENESIS COUPE', 'value': 'GENESIS COUPE'}, {
      'groupValue': 'HONDA',
      'text': 'CR-Z',
      'value': 'CR-Z'
    }, {'groupValue': 'HONDA', 'text': 'Insight', 'value': 'Insight'}, {
      'groupValue': 'HONDA',
      'text': 'Odyssey',
      'value': 'Odyssey'
    }, {'groupValue': 'HONDA', 'text': 'Ridgeline', 'value': 'Ridgeline'}, {
      'groupValue': 'INFINITI',
      'text': 'EX',
      'value': 'EX'
    }, {'groupValue': 'INFINITI', 'text': 'FX45', 'value': 'FX45'}, {
      'groupValue': 'INFINITI',
      'text': 'FX50',
      'value': 'FX50'
    }, {'groupValue': 'INFINITI', 'text': 'G35', 'value': 'G35'}, {
      'groupValue': 'INFINITI',
      'text': 'G37',
      'value': 'G37'
    }, {'groupValue': 'MITSUBISHI', 'text': 'RVR', 'value': 'RVR'}, {
      'groupValue': 'PORSCHE',
      'text': 'Panamera',
      'value': 'Panamera'
    }, {'groupValue': 'PORSCHE', 'text': 'Boxster', 'value': 'Boxster'}, {
      'groupValue': 'PORSCHE',
      'text': 'Cayman',
      'value': 'Cayman'
    }, {'groupValue': 'SUZUKI', 'text': 'X-Over', 'value': 'X-Over'}, {
      'groupValue': 'SUZUKI',
      'text': 'Kizashi',
      'value': 'Kizashi'
    }, {'groupValue': 'SUZUKI', 'text': 'Yeti', 'value': 'Yeti'}]
  };

  customerType;
  assetType;
  make;
  model;
  year;
  enginePower;
  assetPrice;
  advancePaymentPercentage;
  advancePaymentAmount;
  leasePeriod;
  margin;
  contractFee;
  paymentDate;
  brands;
  modelsBySelectedBrand;
  selectedBrand: string = '';
  selectedModel: string= '';

  constructor() { }

  ngOnInit() {
    var temp = [];
    this.makesAndModels.choices.forEach(data => temp.push(data['groupValue']));
    this.brands = Array.from( new Set(temp));

    console.log(this.brands);
  }

  getCarModelsByBrand(brand){
    this.selectedModel = '';
    this.modelsBySelectedBrand = [];
    this.makesAndModels.choices.forEach(data => {
    if(data['groupValue'] === brand){
      this.modelsBySelectedBrand.push(data['text'])
    }})
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
