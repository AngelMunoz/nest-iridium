import { Component } from '@nestjs/common';
import { Configuration } from 'iridium';

@Component()
export abstract class IridiumDatabaseConfig {
  abstract getConfiguration(): Configuration;
}